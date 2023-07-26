package cricket

import (
	"cricket-stats/backend/model"
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	_ "github.com/go-sql-driver/mysql"
)

var TestRecords []model.Test

func GetTestStats(w http.ResponseWriter, r *http.Request) {
	fmt.Println("You are in GET table ", *r)
	w.Header().Set("Content-Type", "application/json")

	my_db := Connect()
	TestRecords = GetFromDB(my_db, TestRecords)
	
	// json
	jsonData, err := json.Marshal(TestRecords)
	if err != nil {
		log.Fatal(err)
	}
	// json.NewEncoder(w).Encode(TestRecords)

	w.Write(jsonData)
	TestRecords = make([]model.Test, 0)
}

func Addplayer(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	var P model.Test
	err := json.NewDecoder(r.Body).Decode(&P)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		fmt.Println("error")
		return
	}
	fmt.Println(P)
	TestRecords = append(TestRecords, P)

	my_db := Connect()
	Adding(my_db, P)
	json.NewEncoder(w).Encode(P)
}