const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const xss = require('xss-clean');
const path = require('path')
const bodyParser = require("body-parser");
const mongoSanitize = require('express-mongo-sanitize');
const userRouter = require('./routes/users.routes');
const clientRouter = require('./routes/clients.routes');
const freelancerRouter = require('./routes/freelancer.routes');
const suggestionRouter = require('./routes/suggestion.routes');
const docRouter = require('./routes/document.routes');
const contactUsRouter = require('./routes/contactUs.routes');
const reviewRouter = require('./routes/review.routes');
const jobRouter = require('./routes/job.routes');
const adminRouter = require('./routes/admin.routes');
const budgetRouter = require('./routes/budget.routes');
const dateRouter = require('./routes/date.routes');
const taskRouter = require('./routes/task.routes');


// Models
const task = require('./models/task.model');
const suggestion = require('./models/suggestion.model');
const review = require('./models/review.model');
const link = require('./models/link.model');
const job = require('./models/job.model');
const freelancer = require('./models/freelancer.model');
const document = require('./models/document.model');
const client = require('./models/client.model');
const User = require('./models/user.model');
const date = require('./models/date.model');
const admin = require('./models/admin.model');
const contactUs = require('./models/contactUs.model');


const app = express();
app.use(cors());
// app.use("/uploads", express.static("uploads"));

app.use('/uploads/images',express.static(path.join("uploads/images")))
app.use('/uploads/documents',express.static(path.join("uploads/documents")))

app.use(express.json()); //Necessary To Post Data


if(process.env.NODE_ENV==='development') {
    app.use(morgan('dev'));
}
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin',"*");
    res.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept, Authorization")
    res.setHeader("Access-Control-Allow-Methods","GET, POST, PATCH,PUT ,DELETE, OPTIONS");
    next();
});
// ADMIN Panel
const AdminBro = require('admin-bro')
const expressAdminBro = require('@admin-bro/express')
const mongooseAdminBro = require('@admin-bro/mongoose')
const bcrypt = require("bcrypt");

const contentUsers = {
    name: 'Users',
    // icon: '',
}
const contentJobs = {
    name: 'Jobs',
    // icon: '',
}
const contentContact = {
    name: 'Contact',
    // icon: '',
}
const contentAssoc = {
    name: 'Links and Docs',
    // icon: '',
}


AdminBro.registerAdapter(mongooseAdminBro)
const AdminBroOptions = {resources:[
     {resource: User,options: {parent: contentUsers}},
     {resource: freelancer,options: {parent: contentUsers}},
     {resource: client,options: {parent: contentUsers}},
     {resource: admin,options: {parent: contentUsers}},
     {resource: task,options: {parent: contentJobs}},
     {resource: suggestion,options: {parent: contentJobs}},
     {resource: review,options: {parent: contentJobs}},
     {resource: job,options: {parent: contentJobs}},
     {resource: date,options: {parent: contentJobs}},
     {resource: link,options: {parent: contentAssoc}},
     {resource: document,options: {parent: contentAssoc}},
     {resource: contactUs,options: {parent: contentContact}},
    ],

    branding: {
        companyName: 'CrowdSourcing Admin Panel',
        logo: 'https://play-lh.googleusercontent.com/mR_90d6G3yG85wtSqaIm2NhHNTpXQFDdr0kGyU6JPJ0B0emm1LNmBI_rNcQ-khwcuMeE'
    },
}

const adminBro = new AdminBro(AdminBroOptions)
// const router = expressAdminBro.buildRouter(adminBro)
const router = expressAdminBro.buildAuthenticatedRouter(adminBro, {
    authenticate: async (email, password) => {
        const user = await admin.findOne({email})
        if (!user) {
            return false
        }
        if (user) {
            const matched = await bcrypt.compare(password, user.password)
            if (matched) {
                return user
            }
        }
        return false
    },
    cookiePassword: 'some-secret-password-used-to-secure-cookie',
})
app.use(adminBro.options.rootPath,router)

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());


// Data Sanitization against NoSQL injection
app.use(mongoSanitize());

// // Data Sanitization against XXS
app.use(xss());


app.use('/api/users',userRouter);
app.use('/api/clients',clientRouter);
app.use('/api/freelancers',freelancerRouter);
app.use('/api/reviews',reviewRouter);
app.use('/api/jobs',jobRouter);
app.use('/api/budgets',budgetRouter);
app.use('/api/suggestions',suggestionRouter);
app.use('/api/documents',docRouter);
app.use('/api/contact',contactUsRouter);
app.use('/api/dates',dateRouter);
app.use('/api/admin',adminRouter);
app.use('/api/tasks',taskRouter);


//
// app.use('/api/classification',classificationRouter)


module.exports = app;
