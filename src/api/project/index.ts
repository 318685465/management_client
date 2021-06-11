import api from "..";

export function _projects(page: number = 1){
    return api({
        method: "GET",
        url: `/project/projects/${localStorage.getItem('userid')}/${page}`
    })
}