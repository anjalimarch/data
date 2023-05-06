package data.api.rest;

import static io.restassured.RestAssured.given;

import org.testng.annotations.Test;

import static io.restassured.RestAssured.*;

/**
 * Hello world!
 *
 */
public class App 
{
    
   
    	
    	public static void main(String[] args) {
    	
    	baseURI = "https://www.rahulshettyacademy.com";
		given().get("/users?page=2").then().assertThat()
		.statusCode(200);
    	
    }
}
