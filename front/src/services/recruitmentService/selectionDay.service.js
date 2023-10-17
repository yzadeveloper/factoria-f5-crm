import http from "./http-common";

class SelectionDayDataService{
    getAll(){
        return http.get("api/selectionDay");
    }
    get(id){
        return http.get(`api/selectionDay/${id}`);
    }
    create(data){
        
        return http.post("api/selectionDay", data);
        
    }
    update(id, data){
        return http.put(`api/selectionDay/${id}`, data);
    }
    delete(id){
        return http.delete(`api/selectionDay/${id}`);
    }

    deleteAll(){
        return http.delete(`api/selectionDay`);
    }

    findByUser(id_user){
        return http.get(`api/selectionDay?id_user=${id_user}`);
    }

    getPeopleInSelectionDay(id_selectionDay){
        return http.get(`api/getPeopleInSelectionDay/${id_selectionDay}/people`)
    }
    
}

export default new SelectionDayDataService();