CREATE PROCEDURE dbo.PersonaInsertar
     
	@Cedula varchar(250)	,
	@Nombre varchar(250)	,
	@Primer_Apellido varchar(250),
	@Segundo_Apellido varchar(250),
	@FechaNacimiento DATE,
	@Telefono INT ,
	@Direccion VARCHAR(1000)= NULL,
	@Estado BIT 
	
AS BEGIN
SET NOCOUNT ON

	BEGIN TRANSACTION TRASA

	BEGIN TRY
	-- AQUI VA EL CODIGO
		
		INSERT INTO dbo.Persona 
		(
	      Cedula
	    , Nombre 
	    , Primer_Apellido
	    , Segundo_Apellido 
	    , FechaNacimiento 
		, Telefono
		, Direccion
		, Estado
		)
		VALUES
		(
		 @Cedula
	    , @Nombre 
	    , @Primer_Apellido
	    , @Segundo_Apellido 
	    , @FechaNacimiento 
		, @Telefono
		, @Direccion
		, @Estado
		)


		COMMIT TRANSACTION TRASA
		
		SELECT 0 AS CodeError, '' AS MsgError



	END TRY

	BEGIN CATCH
		SELECT 
				ERROR_NUMBER() AS CodeError
			,	ERROR_MESSAGE() AS MsgError

			ROLLBACK TRANSACTION TRASA
	END CATCH


END