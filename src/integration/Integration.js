export const userData = { "username" : "Andy Ward", "avatarImg" : "/images/avatar.png"} ;
export const clientData = { "clientName" : "SeaSurance" };

export const scriptData = [{ "step" : 0, "stepName" : "Welcome", "stepScript" : "Hi there, Andy speaking, how may I help you today?", "nextStep" : 1 },
  { "step" : 1, "stepName" : "Search Details", "stepScript" : "Could I please get your policy no?/name?/etc?", "nextStep" : 2 },
  { "step" : 2, "stepName" : "Notice", "stepScript" : "Please note all calls are recorded...", "nextStep" : 0 }];
/*
    fetch('http://deepsea-ui-menu.xxx.xxx/api/menu/')
      .then(menu => {
        return menu.json();
      }).then(data => {
      let menus = data.results.map((mnu) => {
        return(
          <NavItem key={mnu.menuId} to={'#nav-link' + mnu.menuId} itemId={mnu.menuId} >
          {mnu.menuName}
        </NavItem>
        )
      })
      this.setState({menus:menus});
    })
     */

export const menu = [{ "menuId" : 0, "menuName" : "Dashboard", "menuPage" : "blank", "navLink" : "#"},
  { "menuId" : 1, "menuName" : "Agent", "menuPage" : "customer", "navLink" : "#"},
  { "menuId" : 2, "menuName" : "Policy", "menuPage" : "policy", "navLink" : "#"},
  { "menuId" : 3, "menuName" : "Claim", "menuPage" : "claim", "navLink" : "#"},
  { "menuId" : 4, "menuName" : "Actuarial", "menuPage" : "blank", "navLink" : "#"},
  { "menuId" : 5, "menuName" : "Other", "menuPage" : "blank", "navLink" : "#"},
];

export const policyTasks = [{ "taskId" : 0, "taskTitle" : "Premium Policy Submission", "taskName" : "Andrew Ward", "taskText" : "Start Date: 10th Feb, 2019"},
  { "taskId" : 1, "taskTitle" : "Basic Policy Submission", "taskName" : "Fred West", "taskText" : "Start Date: 15th Feb, 2019"},
];
export const claimTasks = [{ "taskId" : 0, "taskTitle" : "Acc Dam Claim", "taskName" : "Andrew Ward", "taskText" : "Claim Date: 10th Feb, 2019"},
  { "taskId" : 1, "taskTitle" : "Loss Claim", "taskName" : "Fred West", "taskText" : "Claim Date: 15th Feb, 2019"},
];

export const policyChartDataToday = [{x: 'Premium', y: 155}, {x: 'Standard', y: 125}, {x: 'Basic', y: 35}];
export const policyChartDataThisMonth = [{x: 'Premium', y: 3055}, {x: 'Standard', y: 1525}, {x: 'Basic', y: 375}];
export const policyChartLegend = [{name: 'Premium'}, {name: 'Standard'}, {name: 'Basic'}];

export const claimChartDataToday = [{x: 'Acc Dam', y: 255}, {x: 'Loss', y: 115}, {x: 'Theft', y: 45}];
export const claimChartDataThisMonth = [{x: 'Acc Dam', y: 5055}, {x: 'Loss', y: 2525}, {x: 'Theft', y: 475}];
export const claimChartLegend = [{name: 'Acc Dam'}, {name: 'Loss'}, {name: 'Theft'}];