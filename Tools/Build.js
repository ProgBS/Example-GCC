#!/usr/bin/env -S deno run --unstable --allow-write --allow-read --allow-run --importmap=Tools/Config.json


import { Formatting , Color , Files , Deco , GCC } from 'Project'
import * as Paths from 'Paths'


const 
    { header , spacer , print , clear } = Deco ,
    { green , white , bold , blue } = Color ,
    { discover , prepare , folder } = Files ,
    { prettyPath } = Formatting ;


clear();

header({
    text : blue(bold('GCC C++20 Hello World')) ,
    fill : blue('+')
})

spacer()

print(bold('Project Directory: ') + prettyPath(Paths.root))

spacer()

const files = await discover ({
    subfolders : true ,
    extension : 'cpp' ,
    path : Paths.source
})

await prepare ({
    empty : true ,
    path : Paths.build
})

await GCC ({
    
    verbose : false ,
    
    names : {
        executable : 'App' ,
        main : 'Main.cpp'
    },
    
    paths : {
        build : Paths.build ,
        input : files
    }
})


header({
    text : green(bold('Build Successful')) ,
    fill : ' '
})
