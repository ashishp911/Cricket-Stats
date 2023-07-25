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
	fmt.Println("You are in GET table ")
	w.Header().Set("Content-Type", "application/json")
	// params := mux.Vars(r)

	my_db := Connect()
	TestRecords = GetFromDB(my_db, TestRecords)
	json.NewEncoder(w).Encode(TestRecords)
	fmt.Println(TestRecords)

	// json
	jsonData, err := json.Marshal(TestRecords)
	if err != nil {
		log.Fatal(err)
	}

	w.Write(jsonData)
}
