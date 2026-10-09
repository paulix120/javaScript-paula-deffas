const mostrarRutaUsuarios =  (req,res)=>{
    res.json({mensaje:"Estos son los usuarios "})

}
//ruta de registrarse
const registrarController = async(req,res)=>{
    try{

    }catch (error) {
        res.status(500).json({message:"error al comunicarse con la base d datos ", error:error.message})

    }
    
}

const loginController = async(req,res)=>{
    res.json({mensaje: "Ruta para iniciar sesion"})
}

module.exports ={ mostrarRutaUsuarios,
                registrarController,
                loginController
}
