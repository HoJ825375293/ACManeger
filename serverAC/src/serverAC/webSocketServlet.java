package serverAC;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * 使用自动生成的servlet。java
 * @author 杨睿
 */

/**
 * Servlet implementation class webSocketServlet
 */
@WebServlet("/webSocketServlet")
public class webSocketServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public webSocketServlet() {
        super();
        // TODO Auto-generated constructor stub
        System.out.println("webSocketServlet");
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
		System.out.println("doGet");
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//doGet(request, response);
		
		// 使用Ajax实现登录操作，达到点对点聊天效果
		request.setCharacterEncoding("UTF-8");
		response.setCharacterEncoding("UTF-8");
		System.out.println(request.getParameter("user"));
		String user = request.getParameter("user");
		request.getSession().setAttribute("user", user);
		response.getWriter().append(request.getSession().getAttribute("user").toString());
			
		
	}

}
