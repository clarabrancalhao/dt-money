import { Container } from "./styles";

export const TransactionsTable = () => {
  return (
    <Container>
      <table>
        <thead>
          <tr></tr>
          <th>Título</th>
          <th>Valor</th>
          <th>Categoria</th>
          <th>Data</th>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimente de Website</td>
            <td className="deposit">R$12.000,00</td>
            <td>Desenvolvimento</td>
            <td>20/02/2022</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw"> - R$1.500,00</td>
            <td>Casa</td>
            <td>28/02/2022</td>
          </tr>
          <tr>
            <td>Desenvolvimente de Website</td>
            <td>R$12.000,00</td>
            <td>Desenvolvimento</td>
            <td>20/02/2022</td>
          </tr>
          <tr>
            <td>Desenvolvimente de Website</td>
            <td>R$12.000,00</td>
            <td>Desenvolvimento</td>
            <td>20/02/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};
