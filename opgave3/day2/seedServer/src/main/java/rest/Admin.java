package rest;

import com.google.gson.Gson;
import facades.UserFacade;
import java.text.SimpleDateFormat;
import java.util.Date;
import javax.annotation.security.RolesAllowed;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("demoadmin")
@RolesAllowed("Admin")
public class Admin {
  
  @GET
  @Produces(MediaType.APPLICATION_JSON)
  public String getSomething(){
    String now = new SimpleDateFormat("MM-dd-yyyy HH:mm:ss").format(new Date());
    return "{\"message\" : \"Hello Admin from server (call accesible by only authenticated ADMINS)\",\n"+"\"serverTime\": \""+now +"\"}"; 
  }
  
  @GET
  @Path("getallusers")
  @Produces(MediaType.APPLICATION_JSON)
  public String getUsers(){
      EntityManagerFactory em = Persistence.createEntityManagerFactory("pu_development");
      UserFacade userFacade = new UserFacade(em);
      
      return userFacade.getJSONFromUsers(userFacade.getAllUsers());
  }
 
}
