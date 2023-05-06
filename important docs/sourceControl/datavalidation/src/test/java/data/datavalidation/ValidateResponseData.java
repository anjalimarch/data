package data.datavalidation;

import org.testng.annotations.Test;

import io.restassured.path.xml.XmlPath;
import io.restassured.response.Response;
import junit.framework.Assert;

import static io.restassured.RestAssured.*;

import static io.restassured.RestAssured.*;
import static io.restassured.matcher.RestAssuredMatchers.*;
import static org.hamcrest.Matchers.*;

import java.io.File;
import java.util.List;


public class ValidateResponseData {
  @Test(priority=1)
  public void validateStoreApi() {
	  
	  //parsing json data 
	  baseURI= "https://rahulshettyacademy.com/";
	  
	     given().log().all()
	    .param("key", "qaclick123")
	    .param("place_id","7d361391820817e7b8ef03e25c79605f")
	  
	   
	 
	  .when().log().all()
	  
	   .get("/maps/api/place/get/json")
	  .then().log().all()
	  .statusCode(200)
	  .assertThat()
	  .statusCode(200)
	  .body("location.longitude",equalTo("33.427362"));
	  
	  
	  
  }
  
  
  @Test(priority=1)
  public void parseXmlResponse() {
	  
	  //parsing json data 
	  baseURI= "http://restapi.adequateshop.com";
	  
	  given().log().all()
	  .param("page", "1") 
	  .when().log().all()
	  
	    .get("/api/Traveler")
	    .then()
	    .body("TravelerinformationResponse.page", equalTo("1"));
	  
	  
	  
	  
	  
  }
  
  
  @Test(priority=1)
  public void parseXmlResponseCaptureInVariable() {
	  
	  //parsing json data 
	  baseURI= "http://restapi.adequateshop.com";
	  
	Response res=  given().log().all()
	  .param("page", "1") 
	  .when().log().all()
	  
	    .get("/api/Traveler");
	
	String data = res.xmlPath().get("TravelerinformationResponse.page").toString();
	
	Assert.assertEquals("1", data);
	    
	  
	  
	  
	  
  }
  
  
  @Test(priority=1)
  public void parseXmlResponseAllValues() {
	  
	 //parsing json data 
	 baseURI= "http://restapi.adequateshop.com";
	  
	Response res=  given().log().all()
	  .param("page", "1") 
	  .when().log().all()
	  
	    .get("/api/Traveler");
	
	XmlPath xml = new XmlPath(res.asString());
	
	List travellers = xml.getList("TravelerinformationResponse.travelers.Travelerinformation");
	int size = travellers.size();
	
	Assert.assertEquals(size, 10);
	    
	  //verify traveller name is present in response 
	
	List<String> names = xml.getList("TravelerinformationResponse.travelers.Travelerinformation.name");
	
	
	for (String val: names) {
		
		System.out.println(val);
		
		
	}
	
  }
	  
	
	@Test
	
	public void uploadFile() {
		  
		  //parsing json data 
		  baseURI= "http://restapi.adequateshop.com";
		  
		  File a = new File("./mytestFile.txt");
		  
		  
	       given()
	        .multiPart("file",a)
            .contentType("multipart/form-data")
         .when()
           .log().all()
	       .get("/api/Traveler")
	     .then()
	      .statusCode(200);
	      
	      
		
		
		}
	  
  }
  
  
  
  
  
  
  
  
  
  

