package cricket

import (
	"fmt"
	"log"
	"net/http"
	"github.com/rs/cors"
	"github.com/gorilla/mux"
)

func EnterRouter() {
	r := mux.NewRouter()
	
	r.HandleFunc("/test", GetTestStats).Methods("GET")
	r.HandleFunc("/test/add", Addplayer).Methods("POST")
	fmt.Println("starting server at 8000")
	// Enable CORS for the router
    corsHandler := cors.Default().Handler(r)
	log.Fatal(http.ListenAndServe(":8000", corsHandler))
}
