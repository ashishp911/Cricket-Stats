package Cricket

import (
	"database/sql"
	"fmt"
	"log"
	"user_input/Project_cricket/model"

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

func Adding(db *sql.DB, P model.ODI) {
	fmt.Println("check")
	query := `INSERT INTO  (Player,PlayedMatches,Inning,NumberOfRuns,HighestScore,TotalAverage) VALUES (?, ?, ?, ?, ?,?)`
	_, err := db.Query(query, P.Player, P.PlayedMatches, P.Inning, P.NumberOfRuns, P.HighestScore, P.TotalAverage)
	fmt.Println(query)
	if err != nil {
		fmt.Println(err)
		log.Fatal(err)
	}
	//ID, err := result.LastInsertId()
	fmt.Println("added successfully.")
}

func Updating(db *sql.DB, P model.ODI) {
	_, err := db.Exec(`UPDATE Books book_id=?, year_published = ?, book_title = ?, author_name =?, book_category = ?;`, Book.Book_id, Book.Year_published, Book.Book_title, Book.Author_name, Book.Book_category) // check err
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println("updated successfully.")
}

func Getting(db *sql.DB, Book model.Books) {
	query := `SELECT * FROM Books WHERE id = ?`
	err := db.QueryRow(query, 1).Scan(&Book.Book_id, &Book.Year_published, &Book.Book_title, &Book.Author_name, &Book.Book_category)
	if err != nil {
		log.Fatal(err)
	}
}

func Deleting(db *sql.DB, book_id string) {
	_, err := db.Query("Delete from Books where book_id = ?", book_id)
	if err != nil {
		log.Fatal(err)
	}

}
