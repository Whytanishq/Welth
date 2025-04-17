import { createClient } from '@supabase/supabase-js';
import { v4 as uuidv4 } from 'uuid';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function GET(request) {
  // Development-only bypass
  if (process.env.NODE_ENV !== 'development') {
    return new Response('Seeding only allowed in development', { status: 403 });
  }

  try {
    const transactions = generateRandomTransactions(10); // Generate 10 transactions
    console.log('First transaction sample:', transactions[0]);

    const { data, error } = await supabase
      .from('transactions')
      .insert(transactions)
      .select();

    if (error) {
      console.error('Supabase error:', error);
      throw error;
    }

    return Response.json({
      success: true,
      inserted: data.length,
      first_transaction: data[0]
    });

  } catch (error) {
    console.error('Seeding failed:', error);
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

function generateRandomTransactions(count) {
  const categories = ['food', 'transport', 'housing', 'entertainment'];
  
  return Array.from({ length: count }, () => {
    const isIncome = Math.random() > 0.6;
    const amount = isIncome 
      ? (Math.random() * 4000 + 1000).toFixed(2) 
      : -(Math.random() * 500 + 10).toFixed(2);
    
    return {
      id: uuidv4(),
      amount: parseFloat(amount),
      type: isIncome ? 'INCOME' : 'EXPENSE',
      description: `${isIncome ? 'Earned' : 'Spent'} on ${categories[Math.floor(Math.random() * categories.length)]}`,
      date: new Date(Date.now() - Math.random() * 90 * 86400000).toISOString(),
      category: categories[Math.floor(Math.random() * categories.length)],
      status: Math.random() > 0.2 ? 'completed' : 'pending',
      user_id: '123f92ec-b5eb-43d4-9830-36e09c305f27',
      account_id: 'c645765f-c4f4-45de-a10f-7d8325a05ebc',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };
  });
}