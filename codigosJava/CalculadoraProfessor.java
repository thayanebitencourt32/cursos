public class CalculadoraProfessor{
	
	public static void main(String[] args){
		float pi=3.14f;
		float raio=5.3f;
		float area = raio*raio*pi;
	     int areaSemDecimal = (int) area;	
		System.out.println("resultado:" + area);
		System.out.println("resultado inteiro:" + areaSemDecimal);
	}
	
}