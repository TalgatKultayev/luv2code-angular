package com.luv2code.ecommerce.dao;

import com.luv2code.ecommerce.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.RequestParam;

//origin is more than just hostname
//origin = protocol + hostname +port
//same origin => localhost:4200 == localhost:4200
//different origin => localhost:4200 != localhost:8080


//@CrossOrigin("http://localhost:4200") // accept calls from web browser scripts for this origin
@RepositoryRestResource
public interface ProductRepository extends JpaRepository<Product, Long> {
    Page<Product> findByCategoryId(@RequestParam("id") Long id, Pageable pageable);

    Page<Product> findByNameContaining(@RequestParam("name") String name, Pageable pageable);
}