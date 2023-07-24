package Cricket

import (
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

func NewRouter() {
	r := mux.NewRouter()
	r.HandleFunc("/users", Postby).Methods("POST")
	r.HandleFunc("/users/{book_id}", Putby).Methods("PUT")
	r.HandleFunc("/users/{book_id}", Getby).Methods("GET")
	r.HandleFunc("/users/{book_id}", Deleteby).Methods("DELETE")
	fmt.Println("starting server at 8000")
	log.Fatal(http.ListenAndServe(":8000", r))

}
