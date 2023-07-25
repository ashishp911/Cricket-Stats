package cricket

import (
	"cricket-stats/backend/model"
	"database/sql"
	"fmt"
	"log"

	_ "github.com/go-sql-driver/mysql"
)

func Connect() *sql.DB {
	// Connect to the database
	db, err := sql.Open("mysql", "root:@mani1997@tcp(127.0.0.1:3306)/crickstats")
	if err != nil {
		log.Fatal(err)
	}
	//defer db.Close()

	// Test the connection
	err = db.Ping()
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println("Successfully connected to database!")

	return db

}

func GetFromDB(db *sql.DB, testRecords []model.Test) []model.Test {

	row, err := db.Query(`SELECT Player, PlayedMatches, Inning, NumberOfRuns, HighestScore from test`)
	if err != nil {
		log.Fatal(err)
	}
	defer row.Close()

	for row.Next() {
		var oneRecord model.Test
		err := row.Scan(&oneRecord.Player, &oneRecord.PlayedMatches, &oneRecord.Inning, &oneRecord.NumberOfRuns, &oneRecord.HighestScore)
		if err != nil {
			log.Fatal(err)
		}
		testRecords = append(testRecords, oneRecord)
	}
	return testRecords
}
