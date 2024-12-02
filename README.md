
# **Ekta Fund**

## Table of Contents
* [Introduction](#introduction)
* [Features](#features)
* [Tech Stack](#tech-stack)
* [Installation Guide](#installation-guide)
  * [Frontend](#frontend)
  * [Backend](#backend)
* [Usage](#usage)

* [Roadmap](#roadmap)
* [Contributors](#contributors)

---

## **Introduction**  
**Ekta Fund** is a comprehensive platform designed to revolutionize the way charitable activities are conducted. By acting as a bridge between **non-governmental organizations (NGOs)**, **donors**, and **campaigners**, the platform empowers individuals and organizations to collaborate effectively for societal upliftment. It leverages cutting-edge technology to bring transparency, accountability, and convenience to the world of charity.

With **Ekta Fund**, NGOs can showcase their initiatives, connect with donors, and raise funds more efficiently, while donors are provided with a secure, user-friendly experience to support causes they are passionate about. The platform also caters to corporations and campaigners who aim to promote social initiatives on a larger scale.

Key features of **Ekta Fund** include:
- **Transparency in Fundraising:** All transactions are tracked and documented, ensuring donors can see how their contributions are making a difference.
- **Security:** The platform integrates advanced security measures to protect sensitive data and financial transactions, fostering trust among users.
- **Ease of Use:** With a clean, mobile-responsive interface, **Ekta Fund** ensures accessibility for users of all technical abilities, making it easier than ever to contribute to charitable causes.
- **Collaboration Opportunities:** NGOs and campaigners can collaborate with donors and corporations to amplify their reach and achieve their goals faster.

In addition to facilitating traditional donation models, **Ekta Fund** supports **emergency fundraising**, enabling NGOs to quickly pool resources in times of crisis. By fostering a community-oriented approach, **Ekta Fund** envisions a world where collective action drives meaningful change.

Whether it’s a small individual donation or a large-scale corporate campaign, **Ekta Fund** ensures every contribution is utilized effectively, creating a significant impact on the lives of those in need. Its roadmap includes innovative features like **real-time donation tracking**, **social media integration**, and the addition of more payment gateways to broaden its reach.

**Ekta Fund** is not just a platform but a movement to unite people across boundaries, enabling them to work together for the common good. By prioritizing transparency, security, and ease of access, it inspires confidence among users and establishes itself as a reliable partner in their journey of giving back to society.  
**Ekta Fund** is a comprehensive platform designed to centralize charity activities, enabling NGOs, donors, and campaigners to collaborate for social betterment. The platform offers transparency, security, and easy access to anyone wishing to contribute or seek assistance. 

Through its features, **Ekta Fund** bridges the gap between donors and NGOs, promoting collective action for impactful change. It ensures smooth and secure transactions, real-time updates, and accessibility for users across various technical skill levels.

---

## **Features**

###  **Secure Donations**  
Ensure the highest level of security for donations, providing trust and confidence to donors.

###  **NGO Collaboration**  
NGOs can present their causes, extend their reach, and receive donations for their efforts.

###  **Corporate and Campaign Promotion**  
Empower corporations and campaigners to promote their initiatives, engage with a broader audience, and raise funds for social causes.

### **Emergency Fundraisers**  
Quickly initiate fundraisers for emergencies to pool resources for urgent relief.

###  **Transparency**  
Track the flow of funds with complete transparency to ensure accountability.

###  **User-Friendly Interface**  
Designed to be intuitive, mobile-responsive, and accessible for all users.

###  **Future Features**  
- Integration with more payment gateways.  
- Social sharing features to encourage others to donate.  
- Support buttons to acknowledge NGO efforts.  
- Real-time donation tracking.

---

## **Tech Stack**

### **Frontend**
- **HTML, CSS**
- **React.js**

### **Backend**
- **Node.js**
- **Express**

### **Database**
- **MongoDB Atlas**

### **Deployment**
- **Netlify** (Frontend)
- **Heroku** or **Render** (Backend)

### **Version Control**
- **Git** & **GitHub**

---

## **Installation Guide**

To set up **Ekta Fund** locally, follow these steps:

### **1. Clone the Repository**
```bash
git clone https://github.com/yourusername/ekta-fund.git
```

### **2. Navigate to the Project Directory**
```bash
cd ekta-fund
```

### **3. Install Dependencies**
Navigate to the respective directories and install dependencies:
#### Frontend:
```bash
cd frontend
npm install
```

#### Backend:
```bash
cd backend
npm install
```

### **4. Create Environment Variables**
Create a `.env` file in the root directories of both **frontend** and **backend** and add the following variables:

#### Frontend `.env`:
```bash
REACT_APP_API_URL=<backend_api_url>
```

#### Backend `.env`:
```bash
MONGO_URI=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret_key>
```

### **5. Start the Development Servers**
#### Frontend:
```bash
npm start
```

#### Backend:
```bash
npm start
```

---

## **Usage**

After setting up the project, you can perform the following:

### **1. Accessing the Platform**
- Visit `http://localhost:3000` to interact with the frontend.
- The backend runs at `http://localhost:5000`.

### **2. Create an NGO or Donor Account**
- Use the signup feature to create an account.
- NGOs can register and list their campaigns.

### **3. Make Donations**
- Browse available campaigns and donate securely using the integrated payment gateway.

### **4. View Transactions and Progress**
- Donors can view their contributions, and NGOs can track the progress of their campaigns in real-time.

---



## **Roadmap**  
The **Ekta Fund** roadmap outlines the platform's growth and development strategy. It is divided into short-term and long-term goals to ensure consistent progress:

### **Short-Term Goals**  
1. **Enhanced User Experience**  
   - Refine the UI for better accessibility and usability across devices.  
   - Simplify the onboarding process for donors and NGOs.  

2. **Feature Integration**  
   - Complete integration of donation tracking features to allow real-time updates for donors and NGOs.  
   - Introduce NGO profile verification to build credibility and trust.  

3. **Initial Launch**  
   - Launch the platform with core functionalities such as donation campaigns, NGO profiles, and secure payment processing.  

4. **Testing and Optimization**  
   - Conduct rigorous user testing to identify and fix bugs.  
   - Optimize platform performance for scalability.  

### **Long-Term Goals**  
1. **Advanced Analytics and Reporting**  
   - Develop dashboards with detailed insights for NGOs and donors, including impact metrics and fund allocation breakdowns.  
   - Implement AI-powered analytics to predict campaign success and optimize fundraising strategies.  

2. **Global Outreach**  
   - Expand the platform to include international NGOs and multi-currency payment options.  
   - Partner with global organizations for disaster relief and emergency fundraisers.  

3. **Social Media and Community Engagement**  
   - Enable seamless social media integration for campaigns, allowing users to share causes and encourage participation.  
   - Build a community feature where donors and NGOs can interact, share stories, and celebrate milestones.  

4. **Innovative Fundraising Mechanisms**  
   - Introduce crowdfunding options and tiered donation models to attract diverse donor groups.  
   - Support blockchain-based solutions for enhanced transparency and security.  

5. **Sustainability and Growth**  
   - Incorporate corporate social responsibility (CSR) partnerships with businesses to promote large-scale campaigns.  
   - Regularly update the platform with features driven by user feedback and emerging trends in the charity space.
- **Short-Term Goals:**
    - Implement scalable UI and integrate with the backend.
    - Launch the platform with donation tracking and NGO collaboration.
- **Future Features:**
    - Real-time donation tracking for live updates.
    - Social sharing features to encourage more donations.

---

## **Contributors**
The following members are contributing to Ekta Fund under the course IT-313 Software Engineering at Dhirubhai Ambani Institute of Information and Communication Technology:

* 202201315 Dani Jal Nileshbhai
* 202201281 Shah Sakshi Dharmeshkumar
* 202201354 Ram Kulkarni
* 202201292 Devamm Patel
* 202201275 Kunj Mahendra Bhuva
* 202201271 Rishabh Jain
* 202201362 Tamy Kewalramani
* 202201303 Pandva Ansh Ashutoshhhai
* 202201264 Yadav Alpeshkumar Banshbahhur
* 202201363 Mangukiya Harshkumar Ashwinbhai

