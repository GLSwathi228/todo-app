package com.example.ToDoUsingServlet;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.*;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;

@SuppressWarnings("serial")
public class ToDoUsingServletServlet extends HttpServlet {
	public void doPost(HttpServletRequest req, HttpServletResponse resp) throws IOException {
		
		DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
		
		String username= req.getParameter("firstname");
		String email= req.getParameter("Emailid");
		String password= req.getParameter("PassWord");
		
		Entity user = new Entity("Userdata",email);
		user.setProperty("firstName", username);
		user.setProperty("Email",email );
		user.setProperty("Password", password);
		datastore.put(user);
		RequestDispatcher rd=req.getRequestDispatcher("/ToDo.html");  
		try {
			rd.forward(req, resp);
		} catch (ServletException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}
}
 
