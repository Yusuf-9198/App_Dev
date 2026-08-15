import {db} from '@/lib/db'
type Ctx = {
  params: {
    id: string
  }
}
export async function GET(_req:Request , { params }: Ctx) {
    try{
        const result = await (db as any).execute({
			sql: 'SELECT * FROM user_data where id = ?',
			args:[params.id]
		});
        return Response.json(result.rows)
    }catch (error) {
        return Response.json({
            message: 'Failed to fetch user', 
            status: 500
        })
    }
}


export async function PATCH(req: Request, { params }: Ctx) {

}
// export async function PUT(req: Request, { params }: Ctx) {
// }
export async function DELETE(req: Request, { params }: Ctx) {

}

export async function POST(req: Request) {
    const {name , email} = await req.json()
    if(!name || !email){
        return Response.json({message: 'Name and email are required',
            status: 400
        })
    }    
    try{
        const result = await (db as any).execute({
            sql: 'INSERT INTO user_data (name, email) VALUES (?, ?)',
            args:[name, email]
            }); 
            
            return Response.json({
                id: result.lastInsertRowid,name,email},
                {status: 201}
            );
    }catch (error) {
        return Response.json({message: 'Failed to create user', status: 500})
    }
}