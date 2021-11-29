const products =[
    {
        product1:`pretal `,
        color: `red`,
        id:1,  
    },
    { 
        product1:`collar`,
        color: `blue`,
        id:2, 
    },
    {  
        product1:`Pipeta`,
        color: `white`,
        id:3, 
    },    
    ] 


export const somethingWillhappen = () => {
    return new Promise ((resolve,reject) => {
        if (true){
            setTimeout(() =>{
            resolve(products)
        }, 1000)

    }else{
            reject (`oh no,lo hice mal!`)

        }
    })

}

