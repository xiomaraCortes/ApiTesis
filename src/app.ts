import express,{Application} from "express";
import rutas from "./Routes/routes";
import morgan from "morgan";
import cors from "cors";
import path from "path";

export class App{

    private app:Application;
    constructor(private port?: number|string){
        this.app = express();
        this.settings();
        this.middleware();
        this.Rutas();
    }
    
    settings(){
        this.app.set('port',this.port || process.env.PORT || 3000);
    }

    middleware(){
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json())
        this.app.use('/Documentos',express.static(path.resolve('Documentos')))
    }
    Rutas(){
        this.app.use(rutas);
    }
    async Listen(){
        await this.app.listen(this.app.get('port'));
        console.log("Servidor por el port: ", this.app.get('port'));
    }
}
