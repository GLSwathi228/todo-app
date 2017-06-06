package com.example.ToDoUsingServlet;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.KeyFactory;
import com.google.apphosting.client.datastoreservice.proto.DatastoreService;
import com.google.appengine.api.datastore.EntityNotFoundException;

public class ToDoSignInServlet extends HttpServlet{

		public void doPost(HttpServletRequest req, HttpServletResponse resp) throws IOException {
			String username= req.getParameter("firstname");
			String email= req.getParameter("Emailid");
			String password= req.getParameter("PassWord");
			String pass = "";
			String user1 = "";
			String mail = "";
			
			//retrieving
			com.google.appengine.api.datastore.DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
			try{
				Key userKey = KeyFactory.createKey("Userdata", email);
				Entity user= datastore.get(userKey);
				user1=(String) user.getProperty("firstName");
				pass=(String) user.getProperty("Password");
				mail=(String) user.getProperty("Email");
			}
			catch(EntityNotFoundException e){
			
				System.out.print(e);
				

			}

			
			
			System.out.println(password +"db pass " +password +"customer pass");
			if(email == "yes"){
//				response.setContentType("text/html");
//				response.sendRedirect("todoLogin.jsp"); 
			String testing="<p style=\"color: red;\">You have not registered yet</p>";

			RequestDispatcher dispatcher = req.getRequestDispatcher("/index.jsp");
			req.setAttribute("firstName", testing); // set your String value in the attribute
			try {
				dispatcher.forward( req, resp );
			} catch (ServletException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			}
			else{

			if(password.equals(password))
			{
			System.out.println("inside");
//				login = "yes";
//				response.setContentType("text/html");
//				PrintWriter out = response.getWriter();
			//
//				String html="<html><head><title> Home </title></head><body><p>Logged in Successfully</p><p>Username : "+name+"</p><p>Email : "+mail+"</p><button onclick=\"window.location.href='/index.html'\">Logout</button></body></html>";
//				out.println(html);
			RequestDispatcher dispatcher = req.getRequestDispatcher("/list");
			req.setAttribute("User", username);
			req.setAttribute("Email", email);
			//req.setAttribute("myData",gson.toJson(strings) );
			try {
				dispatcher.forward( req, resp );
			} catch (ServletException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			}
			else
			{

//				login = "no";
//				response.setContentType("text/html");
//				PrintWriter out = response.getWriter();
			//
//				String html="<html><head><title> Wrong password </title></head><body><p>You have entered the wrong password </p><p>Please login again</p><button onclick=\"window.location.href='/index.html'\">Login</button></body></html>";
//				out.println(html);
			String testing="<p style=\"color: red;\">You have entered the wrong password.</p>";

			RequestDispatcher dispatcher = req.getRequestDispatcher("index.jsp");
			req.setAttribute("Name", testing); // set your String value in the attribute
			try {
				dispatcher.forward( req, resp);
			} catch (ServletException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}

			}
			}
			}}
		
