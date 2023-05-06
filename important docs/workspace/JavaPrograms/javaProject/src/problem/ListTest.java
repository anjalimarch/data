package problem;

import java.util.ArrayList;

import stepdefinitions.SELECT;
import stepdefinitions.WHERE;

public class ListTest {
	
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int [] n= new int[5];
		ArrayList<Integer>a= new ArrayList<Integer>();
		a.add(5);
		a.add(13);
		a.get(0);
		System.out.println(a.get(0));

	}
	
	//HashMap non thread safe
	//non sychronized
	//fast
	
	//maps are traversed via iterator. 
	//null is allowed
	// table null is not allowed else we will get null pointor exceptions
	
	/*
	 * SELECT * FROM Employee WHERE sal = ( SELECT MIN(sal) FROM Employee WHERE sal
	 * IN ( SELECT DISTINCT TOP N sal FROM Employee ORDER BY sal DESC ) )
	 */
}
