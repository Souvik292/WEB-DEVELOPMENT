import App from "./src/app.js"
import 'dotenv/config'

import cors from "cors";

App.use(cors());

App.listen(4000, () => {
    console.log('Server is running on : http://localhost:4000');
});
