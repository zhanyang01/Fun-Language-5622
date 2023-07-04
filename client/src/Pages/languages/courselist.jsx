import React, { useState } from "react";

// const [list, setList] = useState([]);

const courseProgress = () => {
    const [list, setList] = useState([]);
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
}

export default courseProgress;