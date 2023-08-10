package cricket

import (
	"cricket-stats/backend/model"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"sort"

	_ "github.com/go-sql-driver/mysql"
)

var TestRecords []model.Test

func GetTestStats(w http.ResponseWriter, r *http.Request) {
	// fmt.Println("You are in GET table ", *r)
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

func SortByRuns(w http.ResponseWriter, r *http.Request) {
	// fmt.Println("You are in SortByRuns function", *r)
	w.Header().Set("Content-Type", "application/json")
	my_db := Connect()
	TestRecords = GetFromDB(my_db, TestRecords)

	// Sort by runs here
	sort.Slice(TestRecords, func(i, j int) bool {
		return TestRecords[i].NumberOfRuns > TestRecords[j].NumberOfRuns
	})

	// json
	jsonData, err := json.Marshal(TestRecords)
	if err != nil {
		log.Fatal(err)
	}
	// json.NewEncoder(w).Encode(TestRecords)

	w.Write(jsonData)
	TestRecords = make([]model.Test, 0)

}
func SortByMatches(w http.ResponseWriter, r *http.Request) {
	// fmt.Println("You are in SortByRuns function", *r)
	w.Header().Set("Content-Type", "application/json")
	my_db := Connect()
	TestRecords = GetFromDB(my_db, TestRecords)

	// Sort by runs here
	sort.Slice(TestRecords, func(i, j int) bool {
		return TestRecords[i].PlayedMatches > TestRecords[j].PlayedMatches
	})

	// json
	jsonData, err := json.Marshal(TestRecords)
	if err != nil {
		log.Fatal(err)
	}
	// json.NewEncoder(w).Encode(TestRecords)

	w.Write(jsonData)
	TestRecords = make([]model.Test, 0)
}
func SortByHighScore(w http.ResponseWriter, r *http.Request) {
	// fmt.Println("You are in SortByRuns function", *r)
	w.Header().Set("Content-Type", "application/json")
	my_db := Connect()
	TestRecords = GetFromDB(my_db, TestRecords)

	// Sort by runs here
	sort.Slice(TestRecords, func(i, j int) bool {
		return TestRecords[i].HighestScore > TestRecords[j].HighestScore
	})

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
	TestRecords = append(TestRecords, P)

	my_db := Connect()
	Adding(my_db, P)
	json.NewEncoder(w).Encode(P)
}
