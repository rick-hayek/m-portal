import Q from 'q';
import $ from 'jquery'
import Endpoints from './endpoint';

const API_BASE = 'http://bigdata-dev03.chinanorth.cloudapp.chinacloudapi.cn:18000/api';

export function login(userName, password){
    let reqeustBody = 'username=' + userName + '&password=' + password;
    
    return Q($.ajax({
        type: 'POST',
        url: API_BASE + '/user/login/',
        length: reqeustBody.length,
        contentType:'application/x-www-form-urlencoded', 
        data: reqeustBody,
    }));
}

export function logout() {
    return Q($.ajax({
        type: 'POST',
        url: API_BASE + '/user/logout/',
        contentType:'application/json', 
    }));
}

export function getTaskList(payload) {
    let p = '{"start":0,"length":10,"task_id":"","strategy_id":"","task_type":-1,"start_date":"2018-07-26 00:00:00","end_date":"2018-08-02 23:59:59","status":-1}';
    return requestWithAuth(Endpoints.Task_List, p);
}

function requestWithAuth(url, payload, sessionId) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json, text/plain, */*");
    headers.append("Cookie", "sessionid=69j4gz7fz52wto16tgtslp6q0y4dlu5s");
    //headers.append("Cookie", "sessionid=" + sessionId);
    let init = {
        method: 'POST',
        headers: headers,
        mode: 'cors',
        // body: JSON.stringify(payload),
        body: payload,
        // credentials: "include",
        // referrer: "client",
    };
    let request = new Request(url);

    return fetch(url, init);
}