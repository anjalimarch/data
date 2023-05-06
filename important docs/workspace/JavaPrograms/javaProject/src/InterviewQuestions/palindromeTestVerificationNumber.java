package InterviewQuestions;

import java.util.Scanner;

public class palindromeTestVerificationNumber {
	static int num,c, remainder,logic=0;
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
	
		Scanner input=new Scanner(System.in);     //131=100*1+3*10+1*1
		                                        //  l //   1
		                                         //l  //1*10+3//13
		                                        //l  //130+1
		                                           //num = 1*100+3*10+1*1
		                                          //1
		                                          //1+0
		                                           // 10+2
		                                           //
		num= input.nextInt();
		c=num;
       palindromeTest(num);
	}

	public static void palindromeTest(int num) {
		// TODO Auto-generated method stub
			
			while(num>0){
			 remainder=num%10;
			  logic=(logic*10)+remainder;
			 num=num/10;
			}
			
			if(c==logic) {
				System.out.println("Yes");
				
			}else{
				System.out.println("No");
				
			}
		
		
		
		
	}
		
	}
	


