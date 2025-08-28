const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Prepare monthly report",
        description: "Compile sales and expense data for July.",
        date: "2025-08-28",
        category: "Reporting",
      },
      {
        active: true,
        newTask: false,
        completed: true,
        failed: false,
        title: "Update client database",
        description: "Ensure all client records are current and accurate.",
        date: "2025-08-27",
        category: "Database",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Fix website bug",
        description: "Resolve the login page crash issue.",
        date: "2025-08-26",
        category: "Development",
      },
    ],
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Design social media graphics",
        description: "Create banners for upcoming campaigns.",
        date: "2025-08-28",
        category: "Design",
      },
      {
        active: true,
        newTask: false,
        completed: true,
        failed: false,
        title: "Client follow-up",
        description: "Email clients for feedback on last delivery.",
        date: "2025-08-27",
        category: "Communication",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Server maintenance",
        description: "Update server patches and reboot systems.",
        date: "2025-08-26",
        category: "IT",
      },
    ],
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Write blog post",
        description: "Draft a blog about AI trends.",
        date: "2025-08-28",
        category: "Content",
      },
      {
        active: true,
        newTask: false,
        completed: true,
        failed: false,
        title: "Update software documentation",
        description: "Add recent API changes to the docs.",
        date: "2025-08-27",
        category: "Documentation",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Debug mobile app",
        description: "Investigate crash reports from users.",
        date: "2025-08-26",
        category: "Development",
      },
    ],
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Prepare presentation slides",
        description: "Slides for upcoming client pitch.",
        date: "2025-08-28",
        category: "Presentation",
      },
      {
        active: true,
        newTask: false,
        completed: true,
        failed: false,
        title: "Team meeting notes",
        description: "Summarize last week’s team meeting.",
        date: "2025-08-27",
        category: "Communication",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Audit inventory",
        description: "Check inventory discrepancies in warehouse.",
        date: "2025-08-26",
        category: "Logistics",
      },
    ],
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Test new software feature",
        description: "Ensure the new module works as expected.",
        date: "2025-08-28",
        category: "QA",
      },
      {
        active: true,
        newTask: false,
        completed: true,
        failed: false,
        title: "Prepare expense report",
        description: "Compile expenses for last month.",
        date: "2025-08-27",
        category: "Finance",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Fix email server issues",
        description: "Investigate email delivery failures.",
        date: "2025-08-26",
        category: "IT",
      },
    ],
  },
];

const admins = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Approve employee reports",
        description: "Review and approve weekly task reports.",
        date: "2025-08-28",
        category: "Management",
      },
    ],
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admins));
};
export const getLocalStorage = () => {
  const employee = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admins"));
  console.log(employee, admin);
};