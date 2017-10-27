package rest;

import javax.annotation.security.RolesAllowed;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("demouser")
@RolesAllowed("User")
public class User {
  
  @GET
  @Produces(MediaType.APPLICATION_JSON)
  public String getSomething(){
    return "{\"message\" : \"Hello User from Server (Accesible by only authenticated USERS)\"}"; 
  }
 @Path("demousergetnumber")
 @Produces(MediaType.APPLICATION_JSON)
 @GET
  public String getRandomNumber(){
      int number = (int)(Math.random() * 100) + 1;
     return "{\"message\" : "+number+"}";
  }
 
}