import React, { useState, useRef } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./LogRegModal.css";

const LogRegModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const first = useRef(null);
  const second = useRef(null);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const change = () => {
    first.current.style.display = "none";
  };

  return (
    <>
      <div className="log-reg-container">
        {isOpen && (
          <>
            <div className="overlay"></div>
            <div className="log-modal">
              <header className="modal_header">
                <button onClick={closeModal} className="close-button">
                  &times;
                </button>
              </header>
              <main className="modal_main">
                <Tabs forceRenderTabPanel defaultIndex={1}>
                  <TabList className="tablist">
                    <Tab>User LogIn</Tab>
                    <Tab>User Register</Tab>
                    <Tab>Doctor LogIn</Tab>
                    <Tab>Doctor Register</Tab>
                  </TabList>

                  {/* User login tab panel */}
                  <TabPanel>
                    <Tabs forceRenderTabPanel>
                      <TabList>
                        <Tab>Email LogIn</Tab>
                        <Tab>Phone LogIn</Tab>
                      </TabList>
                      <TabPanel>
                        {/* <h1>Email Login User</h1> */}
                        <form>
                          <div className="container">
                            <label for="email">Email ID</label>
                            <input
                              type="text"
                              placeholder="Email ID"
                              name="email"
                              className="email"
                              required
                            />

                            <label for="psw">Password</label>
                            <input type="password" placeholder="Password" name="psw" className="psw" required />
                          </div>
                        </form>
                      </TabPanel>
                      <TabPanel>
                        <h1>Phone LogIn User</h1>
                      </TabPanel>
                    </Tabs>
                  </TabPanel>

                  {/* User register tab panel */}
                  <TabPanel>
                    <Tabs forceRenderTabPanel>
                      <TabList>
                        <Tab>Register With Email and Phone</Tab>
                      </TabList>
                      <TabPanel>
                        {/* <h1>Email and Phone</h1> */}

                        <form className="register" ref={first}>
                          <div className="container">
                            <label for="name">Full Name</label>
                            <input
                              type="text"
                              placeholder="Full Name"
                              name="name"
                              id="name"
                              required
                            />

                            <label for="email">Email</label>
                            <input
                              type="text"
                              placeholder="Enter Email"
                              name="email"
                              id="email"
                              required
                            />

                            <label for="phone">Mobile Number</label>
                            <input
                              type="tel"
                              placeholder="Mobile Number"
                              name="phone"
                              id="phone"
                              required
                            />

                            <label for="psw">Password</label>
                            <input
                              type="password"
                              placeholder="Enter Password"
                              name="psw"
                              id="psw"
                              required
                            />

                            <label for="psw-repeat">Repeat Password</label>
                            <input
                              type="password"
                              placeholder="Repeat Password"
                              name="psw-repeat"
                              id="psw-repeat"
                              required
                            />

                            <input
                              type="submit"
                              value="Send OTP"
                              className="registerbtn"
                              onClick={change}
                            />
                          </div>
                        </form>

                        <div className="otp" ref={second}>
                          liuuuu
                        </div>
                      </TabPanel>
                    </Tabs>
                  </TabPanel>

                  {/* Doctor login tab panel */}
                  <TabPanel>
                    <Tabs forceRenderTabPanel>
                      <TabList>
                        <Tab>Email LogIn</Tab>
                        <Tab>Phone LogIn</Tab>
                      </TabList>
                      <TabPanel>
                        <h1>Email Login Doctor</h1>
                      </TabPanel>
                      <TabPanel>
                        <h1>Phone LogIn Doctor</h1>
                      </TabPanel>
                    </Tabs>
                  </TabPanel>

                  {/* Doctor register tab panel */}
                  <TabPanel>
                    <Tabs forceRenderTabPanel>
                      <TabList>
                        <Tab>Register with Email and Phone</Tab>
                      </TabList>
                      <TabPanel>
                        {/* <h1>Email and Phone</h1> */}
                        <form className="register">
                          <div className="container">
                            <label for="name">Full Name</label>
                            <input
                              type="text"
                              placeholder="Full Name"
                              name="name"
                              id="name"
                              required
                            />

                            <label for="email">Email</label>
                            <input
                              type="text"
                              placeholder="Enter Email"
                              name="email"
                              id="email"
                              required
                            />

                            <label for="phone">Mobile Number</label>
                            <input
                              type="tel"
                              placeholder="Mobile Number"
                              name="phone"
                              id="phone"
                              required
                            />

                            <label for="psw">Password</label>
                            <input
                              type="password"
                              placeholder="Password"
                              name="psw"
                              id="psw"
                              required
                            />

                            <label for="psw-repeat">Repeat Password</label>
                            <input
                              type="password"
                              placeholder="Repeat Password"
                              name="psw-repeat"
                              id="psw-repeat"
                              required
                            />

                            <label for="exp">Experience</label>
                            <input
                              type="number"
                              placeholder="Years of Experience"
                              name="exp"
                              id="exp"
                              min="5"
                              max="50"
                              required
                            />

                            <label for="spec">Specialization</label>
                            <input
                              type="text"
                              placeholder="Specialization"
                              name="spec"
                              id="spec"
                              required
                            />

                            <label for="degree">Submit Degree: </label>
                            <input
                              type="file"
                              id="degree"
                              name="degree"
                              multiple
                            />

                            <input
                              type="submit"
                              value="Send OTP"
                              className="registerbtn"
                            />
                          </div>
                        </form>
                      </TabPanel>
                    </Tabs>
                  </TabPanel>
                </Tabs>
              </main>
            </div>
          </>
        )}
        <button className="button" onClick={openModal}>
          LogIn/SignUp
        </button>
      </div>
    </>
  );
};

export default LogRegModal;
