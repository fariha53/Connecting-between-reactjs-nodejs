import express from "express";
import cors from "cors";

const app= express();
 app.use(cors());


app.get("/getData",(req,res)=>{
   res.send("HLorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum sed magna volutpat pretium. Suspendisse sagittis efficitur dolor, in varius enim. Ut sed euismod risus, ultrices dignissim sapien. Suspendisse quis nibh ex. Praesent fermentum nibh vel pharetra consequat. Suspendisse consequat, augue in laoreet feugiat, lectus nulla tempus lorem, tempus aliquam ante turpis non metus. Nulla nibh leo, auctor sed vulputate nec, facilisis vitae erat. Etiam sit amet magna id tellus dictum interdum et et quam. Nullam vestibulum augue vel risus egestas, eu semper tellus laoreet. Donec enim nisl, vehicula nec pulvinar sed, eleifend quis libero. Praesent cursus cursus nisl id maximus. Duis ut lacinia quam, quis scelerisque risus. Nullam risus dolor, ultrices a accumsan et, eleifend nec augue. Nullam vel pharetra tortor, ac cursus nisl. Donec bibendum odio nec est imperdiet, ac bibendum neque condimentum. Vestibulum eget risus pulvinar, finibus enim vel, blandit augue.");
    //res.send(`Fariha`);
});

app.listen(5000,()=>console.log("app is running"));