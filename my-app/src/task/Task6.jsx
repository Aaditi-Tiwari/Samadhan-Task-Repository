// ProfileCard Component
function ProfileCard(props) {
  return (
    <div style={{
      border: "2px solid #ddd",
      borderRadius: "16px",
      padding: "20px",
      width: "280px",
      textAlign: "center",
      boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
      margin: "20px auto",
      backgroundColor: "#fff"
    }}>
      <img 
        src={props.image} 
        alt="profile" 
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          marginBottom: "15px",
          objectFit: "cover"
        }}
      />
      <h2 style={{ margin: "10px 0", color: "#333" }}>{props.name}</h2>
      <p style={{ margin: "5px 0", color: "#555" }}>
        <strong>Course:</strong> {props.course}
      </p>
      <p style={{ margin: "5px 0", color: "#555" }}>
        <strong>Year:</strong> {props.year}
      </p>
    </div>
  );
}

// App Component
function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "20px 0", color: "#444" }}>
        🚀 My Profile Cards
      </h1>

      <ProfileCard 
        image="https://plus.unsplash.com/premium_photo-1682096252599-e8536cd97d2b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D" 
        name="Farhan Khan" 
        course="B.Tech CSE" 
        year="1st Year" 
      />

      <ProfileCard 
        image="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBvcnRyYWl0fGVufDB8fDB8fHww" 
        name="Aditi Tiwari" 
        course="B.Tech IT" 
        year="2nd Year" 
      />


      <ProfileCard 
        image="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D" 
        name="Yash Chitara" 
        course="B.Tech IT" 
        year="2nd Year" 
      />
    </div>
  );
}

export default App;
