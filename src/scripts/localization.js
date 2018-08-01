import LocalizedStrings from 'react-localization';

export const SysString = new LocalizedStrings({
    en: {
        AppName: "Your System Name Here",

        SignInUserNameHint: "Input User Name",
        SignInPasswordHint: "Input Password",
        SignInBtn: "Sign In",
    },
    cn: {
        // System wide
        AppName: "信大天瑞数据采集系统",

        // Log in
        SignInUserNameHint: "输入用户名",
        SignInPasswordHint: "输入登陆密码",
        SignInBtn: "登陆",

        // Navigator
        SystemOverview: "系统总览",
        StrategyManagement: "策略管理",
        StrategyList: "策略列表",
        StrategyConfig: "策略配置",
 
        ResourceManagement: "资源管理" ,
        
        TaskManagement: "任务管理",
        TaskList: "任务列表",
        TaskView: "任务视图",
        TaskConfig: "任务配置",
 
        TaskMonitoring: "状态监控",
        TaskStatus: "工作状态监控",
        TaskLog: "进程工作日志",
        TaskAlarm: "监控告警",
 
        DataStatistic: "数据统计",
        DataOverview: "数据总览",
        HistoricData: "历史数据查询",
 
        SystemManagement: "系统管理",
        UserManagement: "用户管理",
    }
});

// export const LoginString = new LocalizedStrings({
//     en: {
//         SignInUserNameHint: "Input User Name",
//         SignInPasswordHint: "Input Password",
//         SignInBtn: "Sign In",
//     },
//     cn: {
//         SignInUserNameHint: "输入用户名",
//         SignInPasswordHint: "输入登陆密码",
//         SignInBtn: "登陆",
//     }
// });

// export const NavigatorString = new LocalizedStrings({
//     en:{},
//     cn:{
//        SystemOverview: "系统总览",
//        StrategyManagement: "策略管理",
//        StrategyList: "策略列表",
//        StrategyConfig: "策略配置",

//        ResourceManagement: "资源管理" ,
       
//        TaskManagement: "任务管理",
//        TaskList: "任务列表",
//        TaskView: "任务视图",
//        TaskConfig: "任务配置",

//        TaskMonitoring: "状态监控",
//        TaskStatus: "工作状态监控",
//        TaskLog: "进程工作日志",
//        TaskAlarm: "监控告警",

//        DataStatistic: "数据统计",
//        DataOverview: "数据总览",
//        HistoricData: "历史数据查询",

//        SystemManagement: "系统管理",
//        UserManagement: "用户管理",
//     }
// });

export default SysString;