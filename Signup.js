import "../../App.css";
function Signup() {
  return (
    <div className="dflex login" style={{ height: "calc(100vh - 100px)" }}>
      <div
        style={{
          border: "1px solid black",
          borderRadius: "10px",
          padding: "20px",
        }}
      >
        <h1>Login</h1>
        <form>
          <p>
            <label>USERNAME</label>
            <br />
            <input type="text" placeholder="username" />
          </p>
          <p>
            <label>PASSWORD</label>
            <br />
            <input type="password" placeholder="password" />
          </p>
          <button
            style={{
              border: "1px solid black",
              fontSize: "15px",
              padding: "5px",
              borderRadius: "10px",
              background: "green",
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
