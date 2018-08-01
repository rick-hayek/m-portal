import Q from 'q';
import $ from 'jquery'

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