import React, {useEffect, useState} from 'react';
import {useNavigate, Link} from 'react-router-dom';
import axios from 'axios';
import defaultProfileLogo from '../../Images/profileLogo.png';
// import courseProgress from '../languages/courselist';

const Profile = () => {
// ============== constant variables if any ==============
    const navigate = useNavigate();

    const fileReader = new FileReader();

    var usern = localStorage.getItem("username");

    const margin = {
        margin: 20
    }
// ============== user ==============
    const [user, setUser] = useState({
        name:"",
        username:"",
        currentEmail: "",
        newEmail: "",
        password: ""
    })

    const handleChange = e =>{
        const {name,value} = e.target
        setUser({
        ...user, //spread operator 
        [name]:value
        })
    }
    // ============== file(profile pic) ==============  
    // this is to be sent as request (the base64 form)     
    const [pic, setPic] = useState();

    // this is for the image preview (the blob)
    const [previewPic,setPreviewPic] = useState()

    const [imageChanged, setImageChanged] = useState(false);


    // for file upload & preview
    const fileOnChange = async (event) => {
        const file = event.target.files[0];
        if (file && file.type.substring(0, 5) === "image") {
            // localStorage.setItem("pic", file);
            convert(file).then((res) => {
                console.log(res);
                setPic(res)
                setPreviewPic(URL.createObjectURL(file));
                setImageChanged(true);
            });
            alert(file.type.substring(0, 5) + " " + "upload successful");
        } else {
         //   setPic(defaultProfileLogo);
         //   localStorage.setItem("pic", defaultProfileLogo);
            alert("invalid image");
        }
    };

    // to convert the image into base64
    function convert(image) {
        return new Promise((resolve, reject) => {
            fileReader.readAsDataURL(image);
            fileReader.onload = () => {
                console.log("working siuuuuuuuu")
                resolve(fileReader.result);
            };
            fileReader.onerror = (e) => {
                console.log(e);
                reject(e);
            };
        });
    }
    
    const confirmProfile = async () => {
        await axios.put(`${process.env.REACT_APP_BACKEND_SERVER}/Profile/Pic/${localStorage.getItem("userId")}`,{
            image: pic
        })
        .then((res)=>{
            console.log(res);
            alert("profile picture confirmed");
            navigate("/profile");
        }).catch((err)=>{
            console.log(err);
            alert(err);
        })
    }


        // use effect (this time upon load)
        useEffect(()=>{
            setupUser()
        },[])
        
        const setupUser = async ()=>{
            // get the info of the current user
            // endpoint to get the specific user
            // extract out the image --> setPreview(user.image.url)
            const fetchedUser = await axios.get(`${process.env.REACT_APP_BACKEND_SERVER}/api/users/${localStorage.getItem("userId")}`) 
           
/*            axios.get(...).then((result)=>{
                const {image} = result.data
            })

            */
            if(fetchedUser){
                console.log("result",fetchedUser)
                const {username, email, image} = fetchedUser.data
                try {
                    setPreviewPic(image.url);
                } catch(e) {
                    console.log(e);
                }
                // other attributes
            } 
        }

    //================eesean=========================
    /*
    const fileOnChange = (event) => {
        const file = event.target.files[0];
        // alert(file.type.substring(0, 5))
        if (file && file.type.substring(0, 5) === "image") {
            localStorage.setItem("pic", file);
            setPic(URL.createObjectURL(file));
            // alert(file.type.substring(0, 5));
            alert("upload successful");
        } else {
            // setPic(defaultProfileLogo.URL);
            localStorage.setItem("pic", defaultProfileLogo);
            alert("invalid image");
        }
        // setPic(URL.createObjectURL(event.target.files[0]));
    };
    */

    //=============temporary fix======================
    /*const sendImage = (event) => {
        let formData = new FormData();
        formData.append("image", pic);
        fetch("http://localhost:6969/uploadFile", {
            method: "post",
            body: formData
        })
            .then((res) => res.text())
            .then((resBody) => {
                console.log(resBody);
            });
        console.log(pic);
    };*/

    /*
    const sendImage = async () => {
        try {
          setLoading(true);
          const data = new FormData();
          data.append("image", pic);
          const res = await axios.post("http://localhost:6969/upload", data);
          setRes(res.data);
        } catch (error) {
          alert(error.message);
        } finally {
          setLoading(false);
        }
    };
    */

    //============== navigation ============== 
    const homepage = () => {
        navigate('/homepage');
    }
    
    //============== helper functions if any ============== 
    const validEmail = (email) => {
        const emailReged = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        return email.match(emailReged);
    };

    //============== updating account details ============== 
    const updateAccount = async ()=>{
        let errors = [];
        const {name,username,currentEmail,newEmail,password} = user
        if (!name || !username || !currentEmail || !newEmail || !password) {
            errors.push("Please fill up all fields");
            console.log("Please fill up all fields");
        }
        if (!validEmail(currentEmail) && !errors.includes("Please fill up all fields")) {
            errors.push("Invalid current email");
            console.log("Invalid current email");
        }
        if (!validEmail(newEmail) && !errors.includes("Please fill up all fields")) {
            errors.push("Invalid new email");
            console.log("Invalid new email");
        }
        if (password.length < 8 && !errors.includes("Please fill up all fields")) {
            errors.push("Invalid password");
            console.log("Invalid password");
        }
        if (currentEmail !== localStorage.getItem("email") && !errors.includes("Please fill up all fields")) {
            errors.push("Please check that you are giving the correct email");
            console.log("Please check that you are giving the correct email");
        }
        if (errors.length === 0) {
            await axios.put(`${process.env.REACT_APP_BACKEND_SERVER}/Profile`, user)
            .then(res => {
                console.log(res);
                alert(res.data.message);
                if (res.data.message === "update successful") {
                    usern = localStorage.setItem("username", username);
                    navigate('/homepage');
                }
            })
        } else {
            var errorMessage = "Unable to update credentials";
            alert(errorMessage + '\n' + errors.join('\n'));
        }
    }

    //============== deleting user account============== 
    const deleteUser = async()=> {
        // to confirm bfore deleting an account
        const confirmation = prompt("Are you sure you want to delete this account? This is irreversible! (Type ‘y’ to proceed)");
        if (confirmation === 'y') {
            await axios.delete(`${process.env.REACT_APP_BACKEND_SERVER}/api/users/${localStorage.getItem("userId")}`)
            .then((res)=>{
                console.log(res);
                alert(res.data.message);
                localStorage.removeItem("userId");
                localStorage.removeItem("username");
                localStorage.removeItem("email");
                // setLoginUser(res.data.user)
                navigate("/login");
                /*
                if (res.data.message === "User deleted") {
                    localStorage.removeItem("userId");
                    localStorage.removeItem("username");
                    // setLoginUser(res.data.user)
                    navigate("/login");
                } else {
                    alert("Account failed to delete");
                }
                */
            }).catch((err)=>{
                console.log(err);
                alert(err);
            })
        } else {
            alert("Request unsuccessful, please press 'y' to delete if you wish to delete your account");
        }
    }

    //============== Progress of Courses ==============  
    const [list, setList] = useState([]);
    
    function courseProgress() {
        /*
        var course = localStorage.getItem("course");
        var meter = localStorage.getItem("meter");
        for (var i = 0; i < list.length; i++) {
            if (course in list[i]) {
                list[i]["meter"] = meter;
            } else {
                setList([
                    ...list,
                    {course: course, meter: meter}
                ]);
            }
        }
        
        /*
        return ({list.map((task) => (
            <div className="records">
                <h4>task.course: task.meter</h4>
            </div>
        ))});
        */
       var course = localStorage.getItem("course");
       if (!course in list) {
        setList([
            ...list, course
        ]);
        }
        return (
            <ol>
                {list.map(task => (
                    <li key = {task}>{task}</li>
                ))}
            </ol>
        );      
    }

    return (
        <>
            <div className = 'profile_img text-center p-4'>
                <div className = "flex flex-column justify-content-center align-items-center">
                    <img style = {{
                        width: "200px",
                        height: "200px",
                        borderRadius: "50%",
                        // objectFit: "cover",
                        border: "3px-solid-green",
                        display: 'block',
                        margin: 'auto'
                    }}
                    src= { previewPic?previewPic:defaultProfileLogo } alt = "" />                    
                    <input type = "file" accept = "/image/*" onChange = {fileOnChange} />
                    <button className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg  " onClick={confirmProfile}>
                        Set as profile picture
                    </button>
                </div>
            </div>
        <h1> {usern} </h1>
        <h2> Courses completed: </h2>
        <div className="records">
            {courseProgress}
        </div>
        <h2> Assessments completed: </h2>
        <div className="flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
            <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
                Update Your Account
            </div>
            <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
                (Please indicate the same email if you are not changing it!)
            </div>
            <div class="p-6 mt-8">
                <div class="flex flex-col mb-2">
                    <div class=" relative ">
                        <input type="text" id="create-account-name" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="name" value={user.name} onChange={handleChange} placeholder="Full Name"/>
                    </div>
                </div>
                <div class="flex flex-col mb-2">
                    <div class=" relative ">
                        <input type="text" id="create-account-username" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="username" value={user.username} onChange={handleChange} placeholder="Username"/>
                    </div>
                </div>
                <div class="flex gap-4 mb-2">
                    <div class=" relative ">
                        <input type="text" id="create-account-email" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="currentEmail" value={user.currentEmail} onChange={handleChange} placeholder="Current Email"/>
                    </div>
                </div>
                <div class="flex gap-4 mb-2">
                    <div class=" relative ">
                        <input type="text" id="create-account-email" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="newEmail" value={user.newEmail} onChange={handleChange} placeholder="New Email"/>
                    </div>
                </div>
                <div class="flex flex-col mb-2">
                    <div class=" relative ">
                        <input type="password" id="create-account-password" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="password" value={user.password} onChange={handleChange} placeholder="Password(>= 8 characters)"/>
                    </div>
                </div>
                <div class="flex w-full my-4">
                    <button type="submit" className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg " onClick={updateAccount} >
                        Update account
                    </button>
                </div>
            </div>
        </div>
        <div className="flex w-full" style = {margin}>
            <Link to="/homepage">
                <button type="submit" className="py-5 px-5 bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg  " onClick={homepage}>
                    Return to homepage
                </button>
            </Link>
        </div>
            
            <div className="flex w-full">
                <button className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg  " onClick={() => deleteUser()}>
                    Delete Account
                </button>
            </div>

        </>
    )
}

export default Profile;