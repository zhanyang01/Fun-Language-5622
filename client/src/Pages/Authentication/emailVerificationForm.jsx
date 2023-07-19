import React from "react";
import axios from "axios";
import { Link} from "react-router-dom";

const EmailVerificationForm = () => {
    const {userId } = useParams();
    const [verified, setVerified] = useState(false);
    const [verificationFail, setverificationFail] = useState(false);

    {/*useEffect(() => {
        axios
            .put(`${process.env.REACT_APP_BACKEND_SERVER}/api/auth/verify/${userId}`)
            .then((res) => {
                setVerified(true);
            })
            .catch((err) => {
                setverificationFail(true);
            });
    */}
}