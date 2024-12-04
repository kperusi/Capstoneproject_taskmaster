let sign_up_btn = document.querySelector(".sign-up-btn");
let sign_tag = document.querySelector(".sign-up");
let form_sign_up_btn = document.querySelector(".form-sign-up-btn");
let home_page = document.querySelector(".home-main");
let login_btn = document.querySelector(".login-btn");
let form_cancel_btn = document.getElementById("form-cancel-btn");

let first_name_input = document.querySelector(".first-name");
let last_name_input = document.querySelector(".last-name");
let email_input = document.querySelector(".email");
let password_input = document.querySelector(".password");
let confPassword_input = document.querySelector(".confirm-password");

// for dashboard********************************************************************************************************

let add_task_btn = document.querySelector(".add-task-btn");
let taskmaster_form = document.querySelector(".taskmaster-form-x");
let home_btn = document.querySelector(".side-bar-home-btn");
let toolBarUsername = document.querySelector(".username");
let imageContainer = document.querySelector(".user-image-x");
let firstLetterTag = document.querySelector(".first-letter");
let dashboard_name = document.querySelector(".dashboard-name");
let add_task_form = document.getElementById("addTask");
let add_subtask_btn = document.getElementById("add-subtask-btn");
let sub_task_x = document.getElementById("sub-task-x");
let status_input = document.getElementById("task-status-input");
let priority_input = document.getElementById("task-priority-input");
let due_date_input = document.getElementById("task-duedate");
let logout_btn = document.getElementById("logout");
let open_setting_btn = document.getElementById("open-setting-btn");
let setting_tag = document.getElementById("setting");
let total_task_count = document.getElementById("dashboard-task-count");
let recent_task_tag = document.getElementById("recent-task");
let page_container = document.getElementById("page-container");
let task_route_btn = document.querySelector(".side-bar-task-btn");
let dashboard_route_btn = document.querySelector(".side-bar-dashboard-btn");
let todo_tag = document.getElementById("todo-x");
let task_btn = document.getElementById("task-btn");
let dashboard_progress_count = document.getElementById(
  "dashboard-progress-task"
);
let dashboard_completed_count = document.getElementById(
  "dashboard-completed-task"
);
let dashboard_overdue_count = document.getElementById("dashboard-overdue-task");

let single_task_close_btn = document.getElementById("single-task-close-btn");
let edit_btn = document.getElementById("edit-btn");
let save_btn = document.getElementById("save-btn");
let del_btn = document.getElementById("del-btn");
let single_task_display = document.getElementById("single-task-display");
let single_editor_form = document.getElementById("single-edition-form-x");
let single_title = document.getElementById("single-title");
let single_desc = document.getElementById("single-desc");
let single_due_date = document.getElementById("single-due-date");
let single_priority = document.getElementById("single-priority");
let single_status = document.getElementById("single-status");
let single_subtask_x = document.getElementById("single-subtask-x");
let single_createdby = document.getElementById("single-createdby");
let single_updatedat = document.getElementById("single-updatedat");

let singleForm = document.getElementById("edit-form");
let single_title_input = document.getElementById("single-title-input");
let single_desc_input = document.getElementById("single-desc-input");
let single_duedate_input = document.getElementById("single-duedate-input");
let single_priority_input = document.getElementById("single-priority-input");
let single_subtask_input_x = document.getElementById("single-subtask-input-x");

let single_task_tag = document.getElementById("single-task-x");

// task Elements********************************************************************************************************************
let inProgress_tag = document.getElementById("inprogress-x");
let completedTask_tag = document.getElementById("completed-x");

// class Router {
//   constructor(routes) {
//     this.routes = routes;
//     this._loadInitialRoute();

//     window.addEventListener("popstate", () => {
//       this._handleRoute(this._getCurrentPath());
//     });
//   }

//   _getCurrentPath() {
//     let path = window.location.pathname;
//     return path || "/";
//   }

//   _loadInitialRoute() {
//     const pathname = this._getCurrentPath();
//     this._handleRoute(pathname);
//   }

//   _handleRoute(pathname) {

//     // Hide all pages
//     document.querySelectorAll(".page").forEach((page) => {
//       page.classList.remove("active");
//     });

//     //  handling dashboard and task routes

// const dynamicPath=/^\/task\/(.+)$/;
//     // Find and show the correct page
//     const routeId = this.routes[pathname] || this.routes["/"];
//     const pageElement = document.getElementById(routeId);
//     // console.log(pageElement.className)
//     if (pageElement) {
//       pageElement.classList.add("active");
//     } else {
//       // Fallback to login page if route not found
//       document.getElementById(this.routes["/"]).classList.add("active");
//     }

//     if (pathname === "/dashboard") {
//       document.getElementById("dashboard").classList.add("active");
//       document.getElementById("tasks").classList.remove("active");
//       // console.log("your are in dashboard");
//     } else if (pathname === "/register") {
//       document.getElementById("dashboard").classList.remove("active");
//       document.getElementById("tasks").classList.add("active");
//       // console.log("your are in task");
//     }
//     else if(pathname.match(dynamicPath)){
//       document.getElementById("dashboard").classList.add("active");
//       console.log("your are in task");
//     }
//   }

//   navigateTo(pathname) {
//     // Ensure path starts with /
//     pathname = pathname.startsWith("/") ? pathname : `/${pathname}`;

//     // Update browser history
//     window.history.pushState({}, pathname, window.location.origin + pathname);

//     // Handle the route
//     this._handleRoute(pathname);
//   }
// }

// class Router {
//   constructor(routes) {
//       this.routes = this._parseRoutes(routes);
//       this._loadInitialRoute();
//       window.addEventListener('popstate', () => {
//           this._handleRoute(this._getCurrentPath());
//       });
//   }

//   // Parse routes to support dynamic segments
//   _parseRoutes(routes) {
//       const parsedRoutes = {};
//       for (const [path, pageId] of Object.entries(routes)) {
//           // Convert dynamic route segments
//           const paramNames = [];
//           const regexPath = path.replace(/\/:([\w-]+)(\?)?/g, (match, name, optional) => {
//               paramNames.push({ name, optional: !!optional });
//               return optional ? `(/([^/]+))?` : `/([^/]+)`;
//           });

//           parsedRoutes[path] = {
//               pageId,
//               regex: new RegExp(`^${regexPath.replace(/\//g, '\\/')}$`),
//               paramNames
//           };
//       }
//       return parsedRoutes;
//   }

//   _getCurrentPath() {
//       let path = window.location.pathname;
//       return path || '/';
//   }

//   _loadInitialRoute() {
//       const pathname = this._getCurrentPath();
//       this._handleRoute(pathname);
//   }

//   _handleRoute(pathname) {
//       // Hide all pages
//       document.querySelectorAll('.page').forEach(page => {
//           page.classList.remove('active');
//       });

//       // Find matching route
//       const matchedRoute = this._findMatchingRoute(pathname);

//       // Validate authentication for protected routes
//       // if ((pathname === '/dashboard') && !authManager.token) {
//       //     return this._navigateToRoute('/');
//       // }
//       if (pathname === "/dashboard") {
//               document.getElementById("dashboard").classList.add("active");
//               document.getElementById("tasks").classList.remove("active");
//               // console.log("your are in dashboard");
//             } else if (pathname === "/register") {
//               document.getElementById("dashboard").classList.remove("active");
//               document.getElementById("tasks").classList.add("active");
//               // console.log("your are in task");
//             }
//       if (matchedRoute) {
//           const { route, params } = matchedRoute;
//           const pageElement = document.getElementById(route.pageId);

//           if (pageElement) {
//               pageElement.classList.add('active');

//               // Trigger route-specific logic with extracted params
//               this._handleRouteLogic(pathname, route.pageId, params);
//           } else {
//               // Fallback to login page if route not found
//               this._navigateTo('/');
//           }
//       } else {
//           // No route match - go to default route
//           this._navigateTo('/');
//       }
//   }

//   _findMatchingRoute(pathname) {
//       for (const [routePath, route] of Object.entries(this.routes)) {
//           const match = pathname.match(route.regex);
//           if (match) {
//               // Extract parameters
//               const params = {};
//               route.paramNames.forEach((param, index) => {
//                   // Skip full match, regex groups start from index 1
//                   const value = match[index + 2];
//                   if (value) {
//                       params[param.name] = value;
//                   }
//               });

//               return { route, params };
//           }
//       }
//       return null;
//   }

//   _handleRouteLogic(pathname, pageId, params) {
//       // Special route-specific logic
//       switch(pageId) {
//           case 'dashboard-page':
//               // if (authManager.token) loadTasks();
//               break;
//           case 'user-page':
//               // Example: Load user profile with dynamic ID
//               if (params.id) {
//                   loadUserProfile(params.id);
//               }
//               break;
//       }
//   }

//   navigateTo(pathname) {
//       pathname = pathname.startsWith('/') ? pathname : `/${pathname}`;
//       window.history.pushState({}, pathname, window.location.origin + pathname);
//       this._handleRoute(pathname);
//   }

//   // New method to replace current route without adding to history
//   replaceRoute(pathname) {
//       pathname = pathname.startsWith('/') ? pathname : `/${pathname}`;
//       window.history.replaceState({}, pathname, window.location.origin + pathname);
//       this._handleRoute(pathname);
//   }
// }

// class Router {
//   constructor(routes) {
//     this.routes = routes;
//     this._loadInitialRoute();
//     window.addEventListener("popstate", () => {
//       this._handleRoute(this._getCurrentPath());
//     });
//   }

//   _getCurrentPath() {
//     // Ensure we always have a valid path
//     let path = window.location.pathname;

//     // If path is not defined or root, default to login
//     if (!path || path === "/") {
//       return "/";
//     }
//     return path;
//   }

//   _loadInitialRoute() {
//     // Handle page reload by checking current path
//     const pathname = this._getCurrentPath();
//     this._handleRoute(pathname);
//   }

//   _handleRoute(pathname) {
//     // Hide all pages
//     document.querySelectorAll(".page").forEach((page) => {
//       page.classList.remove("active");
//     });

//     // Validate authentication for protected routes
//     // if (pathname === "/dashboard" && !authManager.token) {
//     //   // Redirect to login if not authenticated
//     //   pathname = "/";
//     // }

//     // Find and show the correct page
//     const route = this._matchRoute(pathname);
//     const pageElement = document.getElementById(route.routeId);

//     if (pageElement) {
//       pageElement.classList.add("active");
//       // Special handling for dashboard
//       // if (pathname === '/dashboard' && authManager.token) {
//       //   loadTasks();
//       // }
//       console.log(this._matchRoute(pathname));

//       if (pathname === "/dashboard") {
//         document.getElementById("dashboard").classList.add("active");
//         document.getElementById("tasks").classList.remove("active");
//         // console.log("your are in dashboard");
//       } else if (pathname === "/register") {
//         document.getElementById("dashboard").classList.remove("active");
//         document.getElementById("tasks").classList.add("active");
//         // console.log("your are in task");
//       }
//     } else {
//       // Fallback to login page if route not found
//       document.getElementById(this.routes["/"]).classList.add("active");
//     }
//   }

//   _matchRoute(pathname) {
//     // Iterate over the routes to find a match
//     for (let routePath in this.routes) {
//       const routeRegex = new RegExp(
//         `^${routePath.replace(/:\w+/g, "(\\w+)")}$`
//       );
//       const match = pathname.match(routeRegex);
//       if (match) {
//         // Return matched route and parameters
//         const paramKeys = (routePath.match(/:\w+/g) || []).map((key) =>
//           key.substring(1)
//         );
//         const params = match.slice(1);
//         const routeId = this.routes[routePath];

//         return {
//           routeId,
//           params: paramKeys.reduce((acc, key, index) => {
//             acc[key] = params[index];
//             return acc;
//           }, {}),
//         };
//       }
//     }

//     // Return default route if no match found
//     return { routeId: this.routes["/"], params: {} };
//   }

//   navigateTo(pathname) {
//     // Ensure path starts with /
//     pathname = pathname.startsWith("/") ? pathname : `/${pathname}`;

//     // Update browser history
//     window.history.pushState({}, pathname, window.location.origin + pathname);

//     // Handle the route
//     this._handleRoute(pathname);
//   }
// }

// Initialize router

class Router {
  constructor(routes) {
    this.routes = routes;
    this._loadInitialRoute();
    window.addEventListener("popstate", () => {
      this._handleRoute(this._getCurrentPath());
    });
  }

  _getCurrentPath() {
    let path = window.location.pathname;
    if (!path || path === "/") {
      return "/";
    }
    return path;
  }

  _loadInitialRoute() {
    const pathname = this._getCurrentPath();
    this._handleRoute(pathname);
  }

  _handleRoute(pathname) {
    document.querySelectorAll(".page").forEach((page) => {
      page.classList.remove("active");
    });

    // if (pathname === "/dashboard" && !localStorage.getItem("token")) {
    //   pathname = "/";
    // }

    const route = this._matchRoute(pathname);
    const pageElement = document.getElementById(route.routeId);

    if (pageElement) {
      pageElement.classList.add("active");
      // if (pathname === '/dashboard' && authManager.token) {
      //     loadTasks();
      // }
      if (pathname === "/dashboard") {
        document.getElementById("dashboard").classList.add("active");
        document.getElementById("tasks").classList.remove("active");
        // console.log("your are in dashboard");
      } else if (pathname === "/register") {
        document.getElementById("dashboard").classList.remove("active");
        document.getElementById("tasks").classList.add("active");
        // console.log("your are in task");
      }
    } else {
      document.getElementById(this.routes["/"]).classList.add("active");
    }
  }

  _matchRoute(pathname) {
    for (let routePath in this.routes) {
      const routeRegex = new RegExp(
        `^${routePath.replace(/:\w+/g, "(\\w+)")}$`
      );
      const match = pathname.match(routeRegex);
      if (match) {
        const paramKeys = (routePath.match(/:\w+/g) || []).map((key) =>
          key.substring(1)
        );
        const params = match.slice(1);
        const routeId = this.routes[routePath];

        return {
          routeId,
          params: paramKeys.reduce((acc, key, index) => {
            acc[key] = params[index];
            return acc;
          }, {}),
        };
      }
    }
    return { routeId: "not-found", params: {} }; // Default to 'not-found' if no match
  }

  navigateTo(pathname) {
    pathname = pathname.startsWith("/") ? pathname : `/${pathname}`;
    window.history.pushState({}, pathname, window.location.origin + pathname);
    this._handleRoute(pathname);
  }
}

const router = new Router({
  "/": "login-page",
  "/register": "dashboard-page",
  "/dashboard": "dashboard-page",
  "/task/:id": "dashboard-page",
});

async function signUp(e) {
  e.preventDefault();
  let firstname = first_name_input.value;
  let lastname = last_name_input.value;
  let password = confPassword_input.value;
  let email = email_input.value;

  console.log(password);

  const newUser = { firstname, lastname, email, password };
  console.log(newUser);

  try {
    const response = await fetch("http://localhost:5000/api/auth/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    });

    if (response.ok) {
      const addedUsers = await response.json();
      // fetchUser()
      console.log(addedUsers);
      first_name_input.value = "";
      email_input.value = "";
    } else {
      console.error("Error adding userwer: " + response.statusText);
    }
  } catch (error) {
    console.error("Error adding userl:", error);
  }
}

form_cancel_btn.addEventListener("click", () => {
  registerForm.classList.remove("show");
});

class AuthUI {
  constructor() {
    this.API_URL = "http://localhost:5000/api/auth";
    this.initializeElements();
    this.attachEventListeners();
    // this.showLoginForm();
  }

  initializeElements() {
    // Forms
    this.loginForm = document.getElementById("loginForm");
    this.registerForm = document.getElementById("registerForm");
    this.loginFormElement = document.getElementById("loginFormElement");
    this.registerFormElement = document.getElementById("registerFormElement");

    // Toggle links
    this.showLoginLink = document.getElementById("showLogin");
    this.showRegisterLink = document.getElementById("showRegister");
    this.showRegisterLink2 = document.getElementById("showRegisterLink");

    // Message elements
    // this.loginError = document.getElementById('loginError');
    // this.loginSuccess = document.getElementById('loginSuccess');
    // this.registerError = document.getElementById('registerError');
    // this.registerSuccess = document.getElementById('registerSuccess');
  }

  attachEventListeners() {
    this.showLoginLink.addEventListener("click", () => this.showLoginForm());
    this.showRegisterLink.addEventListener("click", () =>
      this.showRegisterForm()
    );
    this.showRegisterLink2.addEventListener("click", () =>
      this.showRegisterForm()
    );
    this.loginFormElement.addEventListener("submit", (e) =>
      this.handleLogin(e)
    );
    this.registerFormElement.addEventListener("submit", (e) =>
      this.handleRegister(e)
    );
  }

  showLoginForm() {
    this.registerForm.classList.remove("show");
    this.loginForm.classList.add("show");
    //     this.clearMessages();
    //     this.loginFormElement.reset();
  }

  showRegisterForm() {
    this.loginForm.classList.remove("show");
    this.registerForm.classList.add("show");
    console.log("clicked register");
    // this.clearMessages();
    // this.registerFormElement.reset();
  }

  // clearMessages() {
  //     this.loginError.style.display = 'none';
  //     this.loginSuccess.style.display = 'none';
  //     this.registerError.style.display = 'none';
  //     this.registerSuccess.style.display = 'none';
  // }

  // showMessage(element, message) {
  //     element.textContent = message;
  //     element.style.display = 'block';
  // }

  async handleLogin(e) {
    e.preventDefault();
    // this.clearMessages();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    console.log(email, password);

    try {
      const response = await fetch(`${this.API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log("data", data.user);
      console.log(data.token);

      localStorage.setItem("userData", JSON.stringify(data.user));

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      // Store token
      console.log("login successful");
      localStorage.setItem("token", data.token);

      // this.showMessage(this.loginSuccess, 'Login successful! Redirecting...');
      setTimeout(() => {
        router.navigateTo("/dashboard");
      }, 1500);
    } catch (error) {
      // this.showMessage(this.loginError, error.message);
      console.log(error.message);
    }
  }

  async handleRegister(e) {
    e.preventDefault();
    // this.clearMessages();

    // const firstname = document.getElementById('registerUsername').value;
    // const lastname = document.getElementById('registerLastname').value;
    // const email = document.getElementById('registerEmail').value;
    // const password = document.getElementById('registerPassword').value;
    // const newUser = { firstname,lastname, email,password };

    e.preventDefault();
    let firstname = first_name_input.value;
    let lastname = last_name_input.value;
    let password = confPassword_input.value;
    let email = email_input.value;

    console.log(password);

    const newUser = { firstname, lastname, email, password };
    console.log(newUser);

    try {
      const response = await fetch(`${this.API_URL}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Registration failed");
      }
      console.log("registration successful");
      // this.showMessage(this.registerSuccess, 'Registration successful! Please login.');
      setTimeout(() => {
        this.showLoginForm();
        // window.location.href = "/app.html";
      }, 1500);
    } catch (error) {
      // this.showMessage(this.registerError, error.message);
      console.log(error.message);
    }
  }
}

// formating date
const formatDate = function (date, format = "default") {
  const parsedDate = new Date(date.split("T")[0]);
  switch (format) {
    case "short":
      return parsedDate.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "2-digit",
      });
    case "long":
      return parsedDate.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });
    case "relative":
      const now = new Date();
      const diff_date = Math.ceil(((parsedDate - now) / 1000) * 60 * 60 * 24);
      if (diff_date === 0) return "Today";
      if (diff_date === -1) return "Yesterday";
      if (diff_date === 1) return "Tomorrow";
      if (diff_date > 0) return `In ${diff_date} days`;
      if (diff_date < 0) return `${Math.abs(diff_date)} days ago`;

    default:
      return parsedDate.toLocaleDateString();
  }
};

// Initialize the auth UI when the DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  const authUI = new AuthUI();
});

task_btn.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("button clicked");
  router.navigateTo("/register");
});

dashboard_route_btn.addEventListener("click", function (e) {
  router.navigateTo("/dashboard");
});

// for dashboard functions********************************************************************************

const user = JSON.parse(localStorage.getItem("userData"));
let subtasks = [];
let taskStatus = "medium";
let taskPriority = "to-do";
let dueDate = "";
let completedTasks = [];
let taskInProgress = [];
let todoTask = [];
let editSubtasks = [];
let singleTask = {};
let overDueTask = [];
let upComingTask = [];

if (user) {
  let firstLetter = user.firstname.substring(0, 1).toUpperCase();
  let secondLetter = user.lastname.substring(0, 1).toUpperCase();
  console.log(firstLetter);
  dashboard_name.textContent =
    "Hi!" + " " + user.firstname + " " + user.lastname;
  firstLetterTag.textContent = firstLetter + secondLetter;
  toolBarUsername.textContent = user.firstname + " " + user.lastname;
}

open_setting_btn.onclick = function () {
  setting_tag.style.display = "block";
};

home_btn.addEventListener("click", () => {
  window.location.href = "/";
});

const currentHour = function () {
  let date = new Date();
  let hours = date.getHours();
  if (hours < 12) {
    document.querySelector(".dashboard-salutation").textContent =
      "Good Morning";
  } else if (hours < 18) {
    document.querySelector(".dashboard-salutation").textContent =
      "Good Afternoon";
  } else {
    document.querySelector(".dashboard-salutation").textContent =
      "Good Evening";
  }
};

add_task_btn.addEventListener("click", function () {
  taskmaster_form.classList.toggle("show");
});

currentHour();

console.log(JSON.parse(localStorage.getItem("userData")));

const createNewSubtask = function (e) {
  e.preventDefault();

  subtasks.push({ id: subtasks.length + 1, title: "", completed: false });
  renderSubTask(subtasks);
  console.log(subtasks);
};

const renderSubTask = function (task) {
  sub_task_x.innerHTML = "";

  task.map((subtask, index) => {
    let div = document.createElement("div");

    let input = document.createElement("input");
    input.type = "text";
    let span = document.createElement("span");
    span.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17">
                                    <path fill="#494C6B" fill-rule="evenodd"
                                        d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z" />
                                </svg>`;

    div.appendChild(input);
    div.appendChild(span);

    input.value = subtask.title;
    div.classList.add("subtask1-x");
    sub_task_x.appendChild(div);

    input.oninput = (e) => {
      e.preventDefault();
      console.log(input.value);
      subtask.title = input.value;
      console.log(subtask);
    };

    span.onclick = (e) => {
      removeSubtask(subtask);
    };
  });
};

const removeSubtask = function (task) {
  subtasks = subtasks.filter(function (_task) {
    return _task.id !== task.id;
  });

  renderSubTask(subtasks);
  console.log(subtasks);
};

async function createTaskHandler(e) {
  e.preventDefault();

  // Get values and validate they exist
  let title = document.getElementById("task-title").value;
  let description = document.getElementById("task-description").value;
  // let dueDate = new Date("August 19, 2025");

  // Check if values are empty
  if (!title || !description) {
    console.error("Title and description are required");
    return;
  }

  let newTask = {
    title,
    description,
    dueDate: dueDate,
    status: taskStatus,
    priority: taskPriority,
    subtasks: subtasks, // Or you could pass in subtasks from the form
    // Make sure you're getting the user ID correctly
    createdBy: user._id, // or however you store user ID
  };

  // Log the data being sent
  console.log("Sending task data:", newTask);

  try {
    const token = localStorage.getItem("token"); // or however you store your token

    const response = await fetch("http://localhost:5000/api/auth/addTask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(newTask),
    });

    // Log the full error response
    const data = await response.json();
    console.log("Server response:", data);

    if (!response.ok) {
      throw new Error(data.message || "Failed to add task");
    }

    console.log("Task added successfully:", data);
    fetchUserTasks();
    displayDashboardTasks(tasks); // Display tasks on dashboard
    displayRecentsTasks(tasks);
    // completedTaskHandler(tasks);
    filterTaskHandler(tasks);
    taskmaster_form.classList.remove("show");

    // Handle success
  } catch (error) {
    console.error("Detailed error:", error);
    // Show error to user
  }
}

const taskPriorityHandler = (e) => {
  taskPriority = e.target.value;
  console.log(taskPriority);
};

const taskDueDateHandler = () => {
  dueDate = due_date_input.value;
  console.log(dueDate);
};
// Frontend code to fetch all tasks
async function fetchUserTasks() {
  try {
    const token = localStorage.getItem("token"); // Get stored token
    console.log(token);

    const response = await fetch("http://localhost:5000/api/auth/tasks", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to fetch tasks");
    }

    // Handle successful response
    if (data.success) {
      //   displayTasks(data.tasks);
      localStorage.setItem("tasks", JSON.stringify(data.tasks));

      console.log(data.tasks);
      console.log(user._id);
    }
  } catch (error) {
    console.error("Error fetching tasks:", error);
    // Handle error (show error message to user)
  }
}

const tasks = JSON.parse(localStorage.getItem("tasks"));

console.log(tasks);

const filterTaskHandler = function (task) {
  let today = new Date();
  taskInProgress = task.filter(function (_task) {
    return _task.status === "in-progress";
  });
  console.log(taskInProgress.length);

  todoTask = task.filter(function (_task) {
    return _task.status === "to-do";
  });
  console.log(todoTask);

  completedTasks = task.filter(function (_task) {
    return _task.status === "completed";
  });

  overDueTask = task.filter(function (_task) {
    const parsedDate = new Date(_task.dueDate.split("T")[0]);
    return parsedDate < today;
  });

  upComingTask = task.filter(function (_task) {
    const parsedDate = new Date(_task.dueDate.split("T")[0]);
    return parsedDate >= today;
  });
  console.log(upComingTask);
  dashboard_completed_count.textContent = completedTasks.length;
  dashboard_overdue_count.textContent = overDueTask.length;
};

const displayDashboardTasks = function (data) {
  total_task_count.textContent = data.length;
};

const displayRecentsTasks = function (data) {
  const recentTaskHtml = data
    .slice(0, 3)
    .map(
      (task) => `
  <section class="single-recent-task-x">
    <div class=row-flex>
      <p> ${task.title}</p>
      <p> ${task.dueDate.split("T")[0]}</p></div>
  
    
 </div>
    <div>
    <p class=${task.priority}>${task.priority}</p>
  </div>
  </section >

  `
    )
    .join("");
  recent_task_tag.innerHTML += recentTaskHtml;
};

// Frontend logout function
async function logout() {
  try {
    const token = localStorage.getItem("token");

    const response = await fetch("http://localhost:5000/api/auth/logout", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (response.ok) {
      // Clear all auth-related data from localStorage
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      localStorage.removeItem("user");
      setting_tag.style.display = "block";
      // Redirect to login page
      // window.location.href = "./home.html";
      router.navigateTo("/");
    } else {
      throw new Error(data.message || "Logout failed");
    }
  } catch (error) {
    console.error("Logout error:", error);
    // Handle error (show error message to user)
  }
}

logout_btn.addEventListener("click", logout);

add_subtask_btn.addEventListener("click", createNewSubtask);

add_task_form.addEventListener("submit", createTaskHandler);

status_input.addEventListener("change", function (event) {
  taskStatus = event.target.value;
  console.log(taskStatus);
});

const displayTodoTask = function (task) {
  let h1 = document.createElement("h1");
  h1.textContent = `TODO (${task.length})`;
  let div = document.createElement("div");
  let span = document.createElement("span");
  div.appendChild(span);
  div.appendChild(h1);
  div.classList.add("title-x");
  span.classList.add("todo-cirlce");
  todo_tag.appendChild(div);

  task.map((_task) => {
    let container_tag = document.createElement("div");
    container_tag.classList.add("single-recent-task-x");
    let div1 = document.createElement("div");
    div1.classList.add("row-flex");
    let div2 = document.createElement("div");
    let title_tag = document.createElement("p");
    let date_tag = document.createElement("p");
    let priority_tag = document.createElement("p");
    let p1 = document.createElement("p");
    priority_tag.classList.add(`${_task.priority}`);

    title_tag.textContent = _task.title;
    date_tag.textContent = formatDate(_task.dueDate, "short");
    priority_tag.textContent = _task.priority;
    p1.textContent = `0 of ${_task.subtasks.length} subtasks done`;

    div1.appendChild(title_tag);
    div1.appendChild(date_tag);
    div2.appendChild(priority_tag);

    container_tag.appendChild(div1);
    container_tag.appendChild(div2);
    container_tag.appendChild(p1);
    todo_tag.appendChild(container_tag);
    date_tag.classList.add("date-tag");

    container_tag.addEventListener("click", function (e) {
      single_subtask_x.innerHTML = "";
      single_task_tag.classList.add("show");
      single_subtask_input_x.innerHTML = "";
      console.log(_task._id);
      displaySingleTask(_task);
      singleTask = _task;
      router.navigateTo(`/task/${_task._id}`);
    });
  });
};

const displayInProgressTasks = (task) => {
  let h1 = document.createElement("h1");
  h1.textContent = `IN-PROGRESS (${task.length})`;
  let div = document.createElement("div");
  let span = document.createElement("span");
  div.appendChild(span);
  div.appendChild(h1);
  div.classList.add("title-x");
  span.classList.add("inprogress-cirlce");
  inProgress_tag.appendChild(div);
  let completedSubTask = [];

  task.map((_task) => {
    let container_tag = document.createElement("div");
    container_tag.classList.add("single-recent-task-x");
    let div1 = document.createElement("div");
    div1.classList.add("row-flex");
    let div2 = document.createElement("div");
    let title_tag = document.createElement("p");
    let date_tag = document.createElement("p");
    let priority_tag = document.createElement("p");
    priority_tag.classList.add(`${_task.priority}`);
    let p1 = document.createElement("p");

    completedSubTask = _task.subtasks.filter(function (_completed) {
      return _completed.completed === true;
    });

    p1.textContent = `${completedSubTask.length} of ${_task.subtasks.length} subtasks done`;

    title_tag.textContent = _task.title;
    date_tag.textContent = formatDate(_task.dueDate, "short");
    priority_tag.textContent = _task.priority;

    div1.appendChild(title_tag);
    div1.appendChild(date_tag);
    div2.appendChild(priority_tag);

    container_tag.appendChild(div1);
    container_tag.appendChild(div2);
    container_tag.appendChild(p1);
    inProgress_tag.appendChild(container_tag);
    date_tag.classList.add("date-tag");

    container_tag.addEventListener("click", function (e) {
      single_subtask_x.innerHTML = "";
      single_task_tag.classList.add("show");
      single_subtask_input_x.innerHTML = "";
      console.log(_task._id);
      displaySingleTask(_task);
      singleTask = _task;
      router.navigateTo(`/task/${_task._id}`);
    });
  });
};

const displaySingleTask = function (singleTask) {
  // let btn = document.createElement("button");
  // btn.innerText = "close";
  single_title.textContent = singleTask.title;
  single_desc.textContent = singleTask.description;
  single_due_date.textContent = formatDate(singleTask.dueDate, "long");
  single_priority.textContent = singleTask.priority;
  single_status.textContent = singleTask.status;
  single_createdby.textContent = singleTask.createdBy.email;
  single_updatedat.textContent = `Updated by ${formatDate(
    singleTask.updatedAt,
    "short"
  )}`;

  single_title_input.value = singleTask.title;
  single_desc_input.value = singleTask.description;
  single_duedate_input.value = formatDate(singleTask.dueDate, "long");
  single_priority_input.value = singleTask.priority;

  console.log(single_duedate_input.value);
  let completedStyle = "";

  let single_subtask_container = document.createElement("div");
  let h1 = document.createElement("h1");
  h1.classList.add("h1");
  single_subtask_container.appendChild(h1);

  singleTask.subtasks.map((_subtask, i) => {
    let del_btn = document.createElement("button");
    h1.textContent = `Subtasks (${singleTask.subtasks.length})`;

    let div = document.createElement("div");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    let single_subtask_title = document.createElement("p");
    single_subtask_title.textContent = _subtask.title;
    checkbox.checked = _subtask.completed;
    console.log(_subtask.completed);

    if (_subtask.completed) {
      completedStyle = "completed-subtask";
    } else completedStyle = "uncompleted-subtask";

    del_btn.innerText = "x";

    div.appendChild(checkbox);
    div.appendChild(single_subtask_title);
    div.appendChild(del_btn);
    single_subtask_container.appendChild(div);
    single_subtask_title.classList.add(`${completedStyle}`);
    del_btn.classList.add("subtask-del-btn");
    div.className = "div";
    single_subtask_container.classList.add("single-subtask-div");
    single_subtask_title.classList.add("subtask-title");

    del_btn.addEventListener("click", async function (e) {
      console.log(_subtask._id);
      console.log(singleTask._id);

      try {
        const response = await fetch(
          `http://localhost:5000/api/auth/tasks/${singleTask._id}/subtasks/${_subtask._id}`,
          {
            method: "DELETE",
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Failed to delete subtask");
        }

        const data = await response.json();
        console.log(data.message);
        fetchUserTasks();
        return data.task;
      } catch (error) {
        console.error("Delete subtask error:", error);
        throw error;
      }
      // displaySingleTask(singleTask);
    });
  });
  single_subtask_x.appendChild(single_subtask_container);

  //  subtask for form

  let single_subtask_editor_x = document.createElement("div");
  let h2 = document.createElement("h1");
  h2.classList.add("h1");
  h2.textContent = `Subtasks (${singleTask.subtasks.length})`;
  single_subtask_input_x.appendChild(h2);

  editSubtasks = [];
  let title = "";

  singleTask.subtasks.map((_subtask, i) => {
    h1.textContent = `Subtasks (${singleTask.subtasks.length})`;
    let div = document.createElement("div");
    let div2 = document.createElement("div");
    let edit_title_input = document.createElement("input");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    edit_title_input.type = "text";
    edit_title_input.value = _subtask.title;
    checkbox.checked = _subtask.completed;
    div2.appendChild(checkbox);
    div.appendChild(div2);
    div.appendChild(edit_title_input);

    title = edit_title_input.value;
    editSubtasks.push({ title: _subtask.title, completed: _subtask.completed });

    checkbox.onclick = () => {
      console.log(checkbox.checked);
      editSubtasks[i].completed = checkbox.checked;
    };

    edit_title_input.oninput = function () {
      editSubtasks[i].title = edit_title_input.value;
    };

    single_subtask_input_x.appendChild(div);
    edit_title_input.classList.add("edit-title-input");
    div.className = "div3";
    div2.className = "div2";
  });
};

edit_btn.addEventListener("click", () => {
  single_task_display.classList.toggle("hidden");
  single_editor_form.classList.toggle("show");
  save_btn.classList.toggle("show");
});

save_btn.addEventListener("click", async (e) => {
  e.preventDefault();
  single_task_display.classList.toggle("hidden");
  single_editor_form.classList.toggle("show");
  save_btn.classList.toggle("show");
  // single_duedate_input.value = singleTask.dueDate;

  console.log(singleTask);
  console.log(single_title_input.value);
  console.log(editSubtasks);

  title = single_title_input.value;
  description = single_desc_input.value;
  dueDate = single_duedate_input.value;
  priority = single_priority_input.value;
  subtasks = editSubtasks;

  if (!title) {
    title = singleTask.title;
  }
  if (!description) {
    description = singleTask.description;
  }
  if (!dueDate) {
    dueDate = singleTask.dueDate;
  }
  if (!priority) {
    priority = singleTask.priority;
  }

  console.log(title, description, priority, subtasks);

  try {
    const response = await fetch(
      `http://localhost:5000/api/auth/tasks/${singleTask._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          dueDate,
          priority,
          subtasks,
        }),
      }
    );

    // localStorage.setItem("userData", JSON.stringify(data.user));

    if (!response.ok) {
      // Log the full error response
      const errorText = await response.text();
      console.error("Server error:", response.status, errorText);
      throw new Error(
        `HTTP error! status: ${response.status}, message: ${errorText}`
      );
    }

    if (response.ok) {
      const updatedTask = await response.json();
      // alert("Task updated successfully!");
      console.log("Updated task:", updatedTask);
    } else {
      console.log("Failed Updated task");
    }

    fetchUserTasks();

    // Store token
    // console.log("login successful");
    // localStorage.setItem("token", data.token);

    // this.showMessage(this.loginSuccess, 'Login successful! Redirecting...');
    setTimeout(() => {
      // router.navigateTo("/dashboard");
    }, 1500);
  } catch (error) {
    // this.showMessage(this.loginError, error.message);
    console.log(error.message);
    // alert(`Update failed: ${error.message}`);
  }
});

del_btn.addEventListener("click", async () => {
  try {
    // Log the task ID being deleted
    console.log("Attempting to delete task:", singleTask._id);

    const response = await fetch(
      `http://localhost:5000/api/auth/tasks/${singleTask._id}`,
      {
        method: "DELETE",
        headers: {
          // Include any necessary headers (e.g., authorization)
          "Content-Type": "application/json",
          // 'Authorization': `Bearer ${yourAuthToken}`
        },
      }
    );

    // Log the full response for debugging
    console.log("Response status:", response.status);

    // Handle different types of server responses
    if (!response.ok) {
      // Try to parse error details
      const errorData = await response.json().catch(() => ({}));

      console.error("Deletion error details:", {
        status: response.status,
        statusText: response.statusText,
        errorMessage: errorData.message,
      });

      throw new Error(
        errorData.message || `HTTP error! status: ${response.status}`
      );
    }

    // Parse successful response
    const data = await response.json();

    console.log("Task deletion successful:", data.message);
    todo_tag.innerHTML = "";
    complete_tag.innerHTML = "";
    inProgress_tag.innerHTML = "";
    // Refresh tasks
    fetchUserTasks();
    displayDashboardTasks(tasks); // Display tasks on dashboard
    displayRecentsTasks(tasks);
    // completedTaskHandler(tasks);
    filterTaskHandler(tasks);
    displayTodoTask(todoTask);
    displayInProgressTasks(taskInProgress);
    displayCompletedTasks(completedTasks);
    router.navigateTo("/register");
    single_task_tag.classList.remove("show");
    single_task_tag.classList.add("hidden");
    return data.task;
  } catch (error) {
    // Comprehensive error logging
    console.error("Delete task error:", {
      message: error.message,
      name: error.name,
      stack: error.stack,
    });

    // Optional: show user-friendly error
    // toast.error('Failed to delete task. Please try again.');

    throw error;
  }
});
// delete button eventlistener

single_task_close_btn.addEventListener("click", () => {
  router.navigateTo("/register");
  single_task_tag.classList.remove("show");
  single_task_tag.classList.add("hidden");
});

const displayCompletedTasks = (task) => {
  let h1 = document.createElement("h1");
  h1.textContent = `DONE (${task.length})`;
  let div = document.createElement("div");
  let span = document.createElement("span");
  div.appendChild(span);
  div.appendChild(h1);
  div.classList.add("title-x");
  span.classList.add("done");
  completedTask_tag.appendChild(div);

  task.map((_task) => {
    let container_tag = document.createElement("div");
    container_tag.classList.add("single-recent-task-x");
    let div1 = document.createElement("div");
    div1.classList.add("row-flex");
    let div2 = document.createElement("div");
    let title_tag = document.createElement("p");
    let date_tag = document.createElement("p");
    let priority_tag = document.createElement("p");
    priority_tag.classList.add(`${_task.priority}`);

    title_tag.textContent = _task.title;
    date_tag.textContent = _task.dueDate;
    priority_tag.textContent = _task.priority;

    div1.appendChild(title_tag);
    div1.appendChild(date_tag);
    div2.appendChild(priority_tag);

    container_tag.appendChild(div1);
    container_tag.appendChild(div2);
    completedTask_tag.appendChild(container_tag);
    date_tag.classList.add("date-tag");

    container_tag.addEventListener("click", function (e) {
      single_subtask_x.innerHTML = "";
      single_task_tag.classList.add("show");
      single_subtask_input_x.innerHTML = "";
      console.log(_task._id);
      displaySingleTask(_task);
      singleTask = _task;
      router.navigateTo(`/task/${_task._id}`);
    });
  });
};

due_date_input.addEventListener("change", taskDueDateHandler); // or use an event listener for the date picker
priority_input.addEventListener("change", taskPriorityHandler);

fetchUserTasks();
displayDashboardTasks(tasks); // Display tasks on dashboard
displayRecentsTasks(tasks);
// completedTaskHandler(tasks);
filterTaskHandler(tasks);
displayTodoTask(todoTask);
displayInProgressTasks(taskInProgress);
displayCompletedTasks(completedTasks);

dashboard_progress_count.textContent = taskInProgress.length;
