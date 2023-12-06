import React, { useState } from 'react'

const useMath = (n1, n2, op,set) => {


    

    const calc = () => {
        console.log(n1);
        console.log(n2);
        console.log(op);
        if (op == '+'){
            set(Number(n1)+Number(n2));
            console.log(set);
        }

        if (op == '-')
           set(Number(n1)-Number(n2));
        if (op == '/')
           set(Number(n1)/Number(n2));
        if (op == '*')
           set(Number(n1)*Number(n2));

    }

    return {  calc }
}

export default useMath
