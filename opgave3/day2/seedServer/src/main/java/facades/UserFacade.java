package facades;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import security.IUserFacade;
import entity.User;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.ws.rs.NotAuthorizedException;
import javax.ws.rs.core.Response;
import security.IUser;
import security.PasswordStorage;

public class UserFacade implements IUserFacade {

  EntityManagerFactory emf;

  public UserFacade(EntityManagerFactory emf) {
    this.emf = emf;   
  }

  private EntityManager getEntityManager() {
    return emf.createEntityManager();
  }

  @Override
  public IUser getUserByUserId(String id) {
    EntityManager em = getEntityManager();
    try {
      return em.find(User.class, id);
    } finally {
      em.close();
    }
  }
  
  public List<User> getAllUsers(){
    EntityManager em = getEntityManager();
    try {
      return em.createNamedQuery("User.findAll",User.class).getResultList();
    } finally {
      em.close();
    }
  }

  /*
  Return the Roles if users could be authenticated, otherwise null
   */
  @Override
  public List<String> authenticateUser(String userName, String password) {
    try {
      System.out.println("User Before:" + userName+", "+password);
      IUser user = getUserByUserId(userName);  
      System.out.println("User After:" + user.getUserName()+", "+user.getPasswordHash());
      return user != null && PasswordStorage.verifyPassword(password, user.getPasswordHash()) ? user.getRolesAsStrings() : null;
    } catch (PasswordStorage.CannotPerformOperationException | PasswordStorage.InvalidHashException ex) {
      throw new NotAuthorizedException("Invalid username or password", Response.Status.FORBIDDEN);
    }
  }
  
     public String getJSONFromUsers(List<User> users){
      JsonArray resultList = new JsonArray();
        for (User u : users) {
            resultList.add(userToJson(u));
        }
        return new Gson().toJson(resultList);
    }
    
    private  JsonObject userToJson(User u) {
        JsonObject jsonObj = new JsonObject();
        jsonObj.addProperty("username", u.getUserName()); 
        return jsonObj;
    }
}