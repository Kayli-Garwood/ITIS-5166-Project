const { DateTime} = require('luxon');
const { v4: uuidv4 } = require('uuid');
const connections = [
    {
        id: '1',
        topic: 'Brows',
        title: '3D Micro-Blading',
        hostName: 'Kayli Garwood',
        details: 'Topics that will be covered during training include: Anatomy of the Skin, Color Theory, Eyebrow Design and Facial Structure, Choosing your Blades and Equipment, Safety, Sterilization, and Sanitation, Microblading Strokes for Eyebrows, Communicating with your client, Station Set Up, Shadow Live Model Procedure, Free Refresher Courses',
        address: '9201 University City Blvd, Charlotte, NC 28223',
        date: DateTime.local(2021, 11, 30).toISODate(),		
        startTime:'09:00',
        endTime: '17:00',
        image: 'https://i.pinimg.com/736x/46/d2/2e/46d22ee3e2e5bb08f047b0f0e4b78c43.jpg'
    },
    {
        id: '2',
        topic: 'Brows',
        title: 'Brow Tint',
        hostName: 'Janet Smith',
        details: 'Topics that will be covered during training include: Health, Safety & Hygiene, Contraindications, Eyebrow Tinting, Aftercare Advice, Consultation Techniques',
        address: '7615 Birch Hill Lane Charlotte, Nc 28223',
        date: DateTime.local(2021, 10, 17).toISODate(),		
        startTime: '10:30',
        endTime: '18:30',
        image: 'https://www.pmuhub.com/wp-content/uploads/2020/09/what-is-tinting-eyebrows.jpg'
    },
    {
        id: '3',
        topic: 'Brows',
        title: 'Brow Henna',
        hostName: 'Jana Cobb',
        details: 'Topics that will be covered during training include: What is Henna, How is Henna different to tinting, Ingredients Knowledge, Storage and care, Skin Anatomy and how the skin is relevant to Brow Henna, Hair Structure, Colour mixing and processing, Face and Brow Shape, Brow Mapping, Procedures and aftercare advise',
        address: '7412 Buckingham Rd, Charlotte, NC 28223',
        date: DateTime.local(2021, 11, 06).toISODate(),
        startTime: '08:00',
        endTime: '16:00',
        image: 'https://images.squarespace-cdn.com/content/v1/5b40f865266c07f72dadd501/1552438244806-KSE45D7HWE5T427FO4K5/Henna.jpg'
    },
    {
        id: '4',
        topic: 'Brows',
        title: 'Brow Lamination',
        hostName: 'Theresa Byrd',
        details: 'Topics that will be covered during training include: Sanitation Guidelines, Workplace Set Up, Identifying ideal candidates for Brow Lamination, Eyebrow cleansing and preparation, Anatomy of eyes and brows, Correct brow perming and styling techniques, Brow maintenance anc client aftercare, Troubleshooting, Hands-on practice, Client management and pricing, Marketing strategies and tips, Photograph, Social media management, Certificate of completion, Lifetime mentor',
        address: '8176 E. Fairway St, Charlotte, NC 28223',
        date: DateTime.local(2021, 11, 19).toISODate(),
        startTime:'09:00',
        endTime: '17:00',	
        image: 'https://img.ti-media.net/wp/uploads/sites/46/2019/12/brow-lamination-before-after.jpg'
    },
    {
        id: '5',
        topic: 'Brows',
        title: 'Brow Wax',
        hostName: 'Laurel Fuller',
        details: 'Topics that will be covered during training include: Proper Brow Spacing, Necessary Eyebrow Grooming/Trimming, Hair Removal Options, Fill In Options, Maximizing Brow Shape and Brow Symmetry',
        address: '9396 Foxrun Lane, Charlotte, NC 28223',
        date: DateTime.local(2021, 11, 26).toISODate(),
        startTime: '10:30',
        endTime: '18:30',		
        image: 'https://thebrowfixx.com/wp-content/uploads/2020/05/brow-wax-and-tweezing-clean-up-e1590709886809.png'
    },
    {
        id: '6',
        topic: 'Lashes',
        title: 'Mega Volume Lashes',
        hostName: 'Jenny Curry',
        details: 'Topics that will be covered during training include: Eyelash Anatomy and Growth, Product and Tool Expertise, Top Tweezer Practices, Mega Volume Lash Application Method, Isolation Techniques, Eye Taping, Adhesive Safety, Preparation Before Appointments, Reactions and Sensitivities, Client Consultation, Proper Hygiene and Safety, When Not to Lash, Advanced Lash Styles, Aftercare Techniques, Proper Lash Curl, Length and Diameter, Mega Volume Lash Fills, Lash Removal, Client Retention and Pricing, Marketing and Social Media',
        address: '94 Sunbeam Dr., Charlotte, NC 28223',
        date: DateTime.local(2021, 11, 29).toISODate(),		
        startTime: '08:00',
        endTime: '16:00',
        image: 'https://images.squarespace-cdn.com/content/v1/58745f67ebbd1a69ef8efa84/1601254031905-FYW06GPFH7OYB9AETOYF/Mega+volume+lash.jpeg?format=1000w'
    },
    {
        id: '7',
        topic: 'Lashes',
        title: 'Hybrid Lashes',
        hostName: 'Emily Ritter',
        details: 'Topics that will be covered during training include: Eyelash Anatomy and Growth, Product and Tool Expertise, Top Tweezer Practices, Hybrid Lash Application Method, Isolation Techniques, Eye Taping, Adhesive Safety, Preparation Before Appointments, Reactions and Sensitivities, Client Consultation, Proper Hygiene and Safety, When Not to Lash, Advanced Lash Styles, Aftercare Techniques, Proper Lash Curl, Length and Diameter, Hybrid Lash Fills, Lash Removal, Client Retention and Pricing, Marketing and Social Media',
        address: '113 South St Margarets Ave., Charlotte, NC 28223',
        date: DateTime.local(2021, 12, 02).toISODate(),		
        startTime:'09:00',
        endTime: '17:00',
        image: 'https://lirp.cdn-website.com/16fe4a75/dms3rep/multi/opt/69022106_2353074434808449_8667959476160036864_n-640w.jpg'
    },
    {
        id: '8',
        topic: 'Lashes',
        title: 'Volume Lashes',
        hostName: 'Iris Gates',
        details: 'Topics that will be covered during training include: Eyelash Anatomy and Growth, Product and Tool Expertise, Top Tweezer Practices, Volume Lash Application Method, Isolation Techniques, Eye Taping, Adhesive Safety, Preparation Before Appointments, Reactions and Sensitivities, Client Consultation, Proper Hygiene and Safety, When Not to Lash, Advanced Lash Styles, Aftercare Techniques, Proper Lash Curl, Length and Diameter, Volume Lash Fills, Lash Removal, Client Retention and Pricing, Marketing and Social Media',
        address: '9373 N. Acacia St., Charlotte, NC 28223',
        date: DateTime.local(2021, 12, 04).toISODate(),		
        startTime: '10:30',
        endTime: '18:30',
        image: 'https://thescottresidence.com/wp-content/uploads/2018/03/volume-before-and-after.jpg'
    },
    {
        id: '9',
        topic: 'Lashes',
        title: 'Classic Lashes',
        hostName: 'Brittany Foster',
        details: 'Topics that will be covered during training include: Eyelash Anatomy and Growth, Product and Tool Expertise, Top Tweezer Practices, Classic Lash Application Method, Isolation Techniques, Eye Taping, Adhesive Safety, Preparation Before Appointments, Reactions and Sensitivities, Client Consultation, Proper Hygiene and Safety, When Not to Lash, Advanced Lash Styles, Aftercare Techniques, Proper Lash Curl, Length and Diameter, Classic Lash Fills, Lash Removal, Client Retention and Pricing, Marketing and Social Media',
        address: '7703 Theatre Road, Charlotte, NC 28223',
        date: DateTime.local(2021, 12, 09).toISODate(),		
        startTime: '08:00',
        endTime: '16:00',
        image: 'https://micropigmentation.academy/wp-content/uploads/2020/02/Untitled-design.jpg'
    },
    {
        id: '10',
        topic: 'Lashes',
        title: 'Lash Lift',
        hostName: 'Sonya Patterson',
        details: 'Topics that will be covered during training include: cleansing and lash prep, Allergy and irritants, Workplace set up, Retention troubleshooting, Safe product removal, Hands-on practice, Marketing and pricing, Social media management, Photography',
        address: '9413 Poor House Rd., Charlotte, NC 28223',
        date: DateTime.local(2021, 12, 15).toISODate(),		
        startTime:'09:00',
        endTime: '17:00',
        image: 'https://www.pmuhub.com/wp-content/uploads/2020/06/@lashliftstore.jpg'
    },
    {
        id: '11',
        topic: 'Lips',
        title: 'Lip Wax',
        hostName: 'Lesley Wright',
        details: 'Topics that will be covered during training include: Wax Basics, Safety, Hygiene, Pre-Wax care, Post-Wax Care, Sensitive Skin Waxing, Thorough Detailed Instruction, Hands On Practice with model',
        address: '890 Rose St., Charlotte, NC 28223',
        date: DateTime.local(2021, 12, 16).toISODate(),	
        startTime: '10:30',
        endTime: '18:30',	
        image: 'https://static-bebeautiful-in.unileverservices.com/on-waxing-upper-lip.jpg'
    },
    {
        id: '12',
        topic: 'Lips',
        title: 'Lip Blush',
        hostName: 'Becky Adkins',
        details: 'Topics that will be covered during training include: Cleansing and prep, Allergy and irritants, Workplace set up, Lip Blush Application Process and Aftercare, Hands-on Practice, Client Management and pricing, Marketing strategies and tips, Photography, Social Media management, Certificate of completion, Lifetime Mentor',
        address: '905 Brown Road, Charlotte, NC 28223',
        date: DateTime.local(2021, 12, 18).toISODate(),
        startTime: '08:00',
        endTime: '16:00',		
        image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/christinason-lipblush2-1566853007.jpg?resize=480:*'
    },
    {
        id: '13',
        topic: 'Lips',
        title: 'Lip Liner',
        hostName: 'Jill Carter',
        details: 'Topics that will be covered during training include: machine Theory, Needle Sizes and Usage, Skin Anatomy, Client Consultation, Lip designs and shapes, Proper Stretching Techniques, Skin Anesthetics Application, Skin Tone, color selection, and color mix, Aftercare, Infection Prevention & Control, Hands on practice on artificial skin and on a live model',
        address: '35 W. Cedarwood St., Charlotte, NC 28223',
        date: DateTime.local(2021, 12, 20).toISODate(),
        startTime:'09:00',
        endTime: '17:00',		
        image: 'https://cdn.makeupandbeauty.com/wp-content/uploads/2015/09/Permanent-Lip-Liner-Tattoo-Trend-4.jpg'
    }
];

exports.find = function() {
    return connections;
}

exports.findById = function(id) {
    return connections.find(connection=>connection.id === id);
};

exports.save = function(connection) {
    connection.id = uuidv4();
    connection.date;
    connection.startTime;
    connection.endTime;
    connection.image;
    connections.push(connection);
}

exports.updateById = function(id, newConnection){
    let connection = connections.find(connection=>connection.id === id);
    if(connection) {
        connection.topic = newConnection.topic;
        connection.title = newConnection.title;
        connection.hostName = newConnection.hostName;
        connection.details = newConnection.details;
        connection.address = newConnection.address;
        connection.date = newConnection.date;
        connection.startTime = newConnection.startTime;
        connection.endTime = newConnection.endTime;
        connection.image = newConnection.image;
        return true;
    } else {
        return false;
    }   
}

exports.deleteById = function(id) {
    let index = connections.findIndex(connection => connection.id === id);
    if(index !== -1) {
        connections.splice(index, 1);
        return true;
    } else {
        return false;
    }
}