package cricket

import (
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

func EnterRouter() {
	r := mux.NewRouter()

	r.HandleFunc("/test", GetTestStats).Methods("GET")
	fmt.Println("starting server at 8000")
	log.Fatal(http.ListenAndServe(":8000", r))

}
