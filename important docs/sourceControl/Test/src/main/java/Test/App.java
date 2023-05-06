package Test;

import static io.restassured.RestAssured.*;


/**
 * Hello world!
 *
 */
public class App 
{
   
    public static void main(String[] args) {
		// TODO Auto-generated method stub

		baseURI="https://reqres.in/api";
		
		 given().get("/users?page=2")
		.then()
		.assertThat()
		.statusCode(200)
		.body("data[4].first_name", equalTo("George"));
		
		
		
				
    
}
    


}
