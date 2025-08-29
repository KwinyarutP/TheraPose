# 🧘 TheraPose – AI-Powered Physiotherapy (Demo Product)

TheraPose is a **demo physiotherapy application** that uses **AI Pose Estimation** to guide and track physical therapy sessions. Patients can perform rehab at home with real-time feedback, while therapists can monitor progress remotely.

🌐 **Live Demo (Vercel Hosted)**: [https://thera-pose.vercel.app](https://thera-pose.vercel.app)
---

## ✨ Key Features

### 👤 Patient Flow

* Register / Login as a patient
* View assigned exercise programs
* Exercise posture detail page
* Camera session mock screen (pose detection demo)
* Completed session summary
* Progress & results dashboard

### 👩‍⚕️ Therapist Flow

* Register / Login as a therapist
* Dashboard with patient stats
* Add new patients
* View patient info & progress
* Manage rehab programs

---

## 🔧 Installation & Setup (local)

1. **Clone the repository**

   ```bash
   git clone https://github.com/KwinyarutP/TheraPose.git
   cd therapose
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open the app**

   * The app will be running at [http://localhost:5173](http://localhost:5173)

---

## 🌍 Accessing TheraPose via Vercel

You don’t need to install anything locally if you just want to try the demo.  
Simply open the live deployment in your browser:

👉 [https://thera-pose.vercel.app](https://thera-pose.vercel.app)

- Works on **desktop** and **mobile browsers**  
- Best viewed on **Google Chrome** or **Microsoft Edge**  
- No login required for exploring the demo flows  
- Patient and Therapist flows can be tested directly through the web interface
  
---
   
   ## 🚀 Deployment on Vercel
   
   TheraPose can be easily deployed to **Vercel** for free hosting with automatic CI/CD.
   
   ### 1. **Push to GitHub**
   
   Make sure your project is committed and pushed to a GitHub repository.
   
   ### 2. **Import into Vercel**
   
   * Go to [Vercel Dashboard](https://vercel.com/)
   * Click **New Project** → **Import GitHub Repo**
   * Select your **TheraPose** repository
   
   ### 3. **Configure Build Settings**
   
   * **Framework Preset**: `Vite`
   * **Build Command**:
   
     ```bash
     npm run build
     ```
   * **Output Directory**:
   
     ```
     dist
     ```
   
   ### 4. **Deploy**
   
   * Click **Deploy** and wait for the build to finish.
   * Vercel will give you a live URL (like [https://thera-pose.vercel.app](https://thera-pose.vercel.app)).
   
   ### 5. **Automatic Updates**
   
   Every time you push new commits to GitHub, Vercel will automatically rebuild and deploy the latest version.
