import React, { useState } from "react";

const School = () => {

    const [curses, setCurses] = useState(["cook", "draw", "sing"])
    const [teachers, setTeachers] = useState(["shira", ""])
    const [flagCurse, setFlagCurse] = useState(false)
    const [flagTeacher, setFlagTeacher] = useState(false)
    const [students, setStudents] = useState(["shimon", "or","shlomo"])
    const func = () => {


    }
    return (
        <>


            <button onClick={() => flagCurse == true ? setFlagCurse(false) : setFlagCurse(true)}>להצגת הקורסים</button>
            {
                flagCurse == true ?
                    <div>
                        {curses}

                    </div>
                    : null
            }

            <button onClick={() => flagTeacher == true ? setFlagTeacher(false) : setFlagTeacher(true)}>להצגת מורים</button>
            {
                flagTeacher == true ?
                    <div>
                        {teachers}

                    </div>
                    : null
            }
            <div>{students}</div>




        </>
    )
}

export default School