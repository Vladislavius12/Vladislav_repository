import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.time.Duration;
import java.time.Instant;

@WebFilter(urlPatterns = {"/*"})
public class FilterServlet implements Filter {
    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpServletRequest request = (HttpServletRequest) servletRequest;
        String httpMethod = request.getMethod();
        String url = request.getRequestURL().toString();
        Instant start = Instant.now();
        filterChain.doFilter(servletRequest, servletResponse);
        Instant end = Instant.now();
        String time = Long.toString(Duration.between(start, end).toMillis());
        String result = httpMethod + " - " + url + " - " + time;
        System.out.println(result);
    }
    public void destroy() {}
    public void init(FilterConfig arg0) throws ServletException {}
}