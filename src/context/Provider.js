import React from "react"

const keyctx = React.createContext(
    {key:"",}
)

const configctx = React.createContext(
    {
        c1:{
            "A":"M",
            "B":"T",
            "C":"V",
            "D":"P",
            "E":"O",
            "F":"R",
            "G":"N",
            "H":"C",
            "I":"J",
            "J":"K",
            "K":"D",
            "L":"Y",
            "M":"G",
            "N":"Q",
            "O":"Z",
            "P":"B",
            "Q":"F",
            "R":"S",
            "S":"L",
            "T":"E",
            "U":"A",
            "V":"X",
            "W":"U",
            "X":"I",
            "Y":"W",
            "Z":"H",
        },
        c2:{
            "A":"Q",
            "B":"L",
            "C":"A",
            "D":"S",
            "E":"M",
            "F":"Z",
            "G":"T",
            "H":"F",
            "I":"E",
            "J":"K",
            "K":"P",
            "L":"W",
            "M":"J",
            "N":"O",
            "O":"N",
            "P":"Y",
            "Q":"V",
            "R":"U",
            "S":"I",
            "T":"D",
            "U":"B",
            "V":"C",
            "W":"H",
            "X":"G",
            "Y":"R",
            "Z":"X",
        },
        c3:{
            "A":"U",
            "B":"N",
            "C":"S",
            "D":"F",
            "E":"L",
            "F":"O",
            "G":"W",
            "H":"Q",
            "I":"P",
            "J":"I",
            "K":"A",
            "L":"M",
            "M":"Y",
            "N":"C",
            "O":"D",
            "P":"T",
            "Q":"K",
            "R":"J",
            "S":"R",
            "T":"H",
            "U":"E",
            "V":"Z",
            "W":"G",
            "X":"V",
            "Y":"B",
            "Z":"X",
        },
        dictn:{
            0:"A",
            1:"B",
            2:"C",
            3:"D",
            4:"E",
            5:"F",
            6:"G",
            7:"H",
            8:"I",
            9:"J",
            10:"K",
            11:"L",
            12:"M",
            13:"N",
            14:"O",
            15:"P",
            16:"Q",
            17:"R",
            18:"S",
            19:"T",
            20:"U",
            21:"V",
            22:"W",
            23:"X",
            24:"Y",
            25:"Z",
        },
        dictA:{
            "A":0,
            "B":1,
            "C":2,
            "D":3,
            "E":4,
            "F":5,
            "G":6,
            "H":7,
            "I":8,
            "J":9,
            "K":10,
            "L":11,
            "M":12,
            "N":13,
            "O":14,
            "P":15,
            "Q":16,
            "R":17,
            "S":18,
            "T":19,
            "U":20,
            "V":21,
            "W":22,
            "X":23,
            "Y":24,
            "Z":25,
        },
        reflector:{
            "A":"B",
            "B":"A",
            "C":"D",
            "D":"C",
            "E":"F",
            "F":"E",
            "G":"H",
            "H":"G",
            "I":"J",
            "J":"I",
            "K":"L",
            "L":"K",
            "M":"N",
            "N":"M",
            "O":"P",
            "P":"O",
            "Q":"R",
            "R":"Q",
            "S":"T",
            "T":"S",
            "U":"V",
            "V":"U",
            "W":"X",
            "X":"W",
            "Y":"Z",
            "Z":"Y",            
        },
        c11:{
            "M":"A",
            "T":"B",
            "V":"C",
            "P":"D",
            "O":"E",
            "R":"F",
            "N":"G",
            "C":"H",
            "J":"I",
            "K":"J",
            "D":"K",
            "Y":"L",
            "G":"M",
            "Q":"N",
            "Z":"O",
            "B":"P",
            "F":"Q",
            "S":"R",
            "L":"S",
            "E":"T",
            "A":"U",
            "X":"V",
            "U":"W",
            "I":"X",
            "W":"Y",
            "H":"Z",
        },
        c22:{
            "Q":"A",
            "L":"B",
            "A":"C",
            "S":"D",
            "M":"E",
            "Z":"F",
            "T":"G",
            "F":"H",
            "E":"I",
            "K":"J",
            "P":"K",
            "W":"L",
            "J":"M",
            "O":"N",
            "N":"O",
            "Y":"P",
            "V":"Q",
            "U":"R",
            "I":"S",
            "D":"T",
            "B":"U",
            "C":"V",
            "H":"W",
            "G":"X",
            "R":"Y",
            "X":"Z",
        },
        c33:{
            "U":"A",
            "N":"B",
            "S":"C",
            "F":"D",
            "L":"E",
            "O":"F",
            "W":"G",
            "Q":"H",
            "P":"I",
            "I":"J",
            "A":"K",
            "M":"L",
            "Y":"M",
            "C":"N",
            "D":"O",
            "T":"P",
            "K":"Q",
            "J":"R",
            "R":"S",
            "H":"T",
            "E":"U",
            "Z":"V",
            "G":"W",
            "V":"X",
            "B":"Y",
            "X":"Z",
        },
        plugboard:[
            {"M":"A",},{"R":"Q",},{"T":"X",},{"G":"B",},{"Y":"Z",},{"E":"C",}
        ],
        plugboardrev:{
            "M":"A",
            "R":"Q",
            "T":"X",
            "G":"B",
            "Y":"Z",
            "E":"C", 
        }
    }
)

export {keyctx,configctx};