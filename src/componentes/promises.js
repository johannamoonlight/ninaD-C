const products =[
    {
        product1:`Accesorios `,
        color: `red`,
        id:"1",  
        imagen:`/imagenes/correas.jpg`,
        category:"accesorios"
    },
    { 
        product1:`Abrigos`,
        color: `blue`,
        id:"2",
        imagen:`/imagenes/buzitogato.jpg`,
        category:"abrigos"
    },
    {  
        product1:`Pipeta`,
        color: `white`,
        id:"3", 
        imagen:`/imagenes/pipeta.png`,
        category:"pipetas"
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